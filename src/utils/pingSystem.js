// Ping system to keep Render service alive
class PingSystem {
    constructor() {
        this.isActive = false;
        this.intervalId = null;
        this.pingCount = 0;
        this.errorCount = 0;
        this.lastPingTime = null;
        this.baseUrl = window.location.origin;
        
        // Default configuration
        this.config = {
            interval: 14 * 60 * 1000, // 14 minutes (Render free tier sleeps after 15 mins)
            maxErrors: 5,
            retryDelay: 30 * 1000, // 30 seconds
            endpoint: '/health',
            timeout: 10000 // 10 seconds
        };
        
        this.debug = !import.meta.env.PROD;
        
        if (this.debug) {
            console.log('🔧 PingSystem initialized in debug mode');
            window.pingSystem = this;
        }
    }
    
    async ping() {
        try {
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), this.config.timeout);
            
            const response = await fetch(`${this.baseUrl}${this.config.endpoint}`, {
                method: 'HEAD',
                signal: controller.signal,
                cache: 'no-cache',
                headers: {
                    'X-Ping-Source': 'client-keepalive',
                    'X-Ping-Count': this.pingCount.toString()
                }
            });
            
            clearTimeout(timeoutId);
            
            this.lastPingTime = new Date();
            this.pingCount++;
            this.errorCount = 0; // Reset error count on success
            
            if (this.debug) {
                console.log(`✅ Ping #${this.pingCount} successful at ${this.lastPingTime.toLocaleTimeString()}`);
            }
            
            return true;
            
        } catch (error) {
            this.errorCount++;
            this.lastPingTime = new Date();
            
            if (this.debug) {
                console.warn(`❌ Ping #${this.pingCount + 1} failed:`, error.message);
                console.log(`🔄 Error count: ${this.errorCount}/${this.config.maxErrors}`);
            }
            
            // If we've hit max errors, stop the ping system
            if (this.errorCount >= this.config.maxErrors) {
                console.error('🚨 Max ping errors reached. Stopping ping system.');
                this.stop();
                return false;
            }
            
            return false;
        }
    }
    
    start() {
        if (this.isActive) {
            if (this.debug) console.log('⚠️ PingSystem already active');
            return;
        }
        
        this.isActive = true;
        this.errorCount = 0;
        this.pingCount = 0;
        
        // Immediate ping
        this.ping();
        
        // Set up interval
        this.intervalId = setInterval(() => {
            this.ping();
        }, this.config.interval);
        
        if (this.debug) {
            console.log(`🚀 PingSystem started - pinging every ${this.config.interval / 1000}s`);
        } else {
            console.log('🔄 Keep-alive system activated');
        }
    }
    
    stop() {
        if (!this.isActive) {
            if (this.debug) console.log('⚠️ PingSystem already inactive');
            return;
        }
        
        this.isActive = false;
        
        if (this.intervalId) {
            clearInterval(this.intervalId);
            this.intervalId = null;
        }
        
        if (this.debug) {
            console.log('🛑 PingSystem stopped');
        } else {
            console.log('⏹️ Keep-alive system deactivated');
        }
    }
    
    getStats() {
        return {
            isActive: this.isActive,
            pingCount: this.pingCount,
            errorCount: this.errorCount,
            lastPingTime: this.lastPingTime,
            nextPingIn: this.isActive ? this.config.interval - (Date.now() - (this.lastPingTime?.getTime() || 0)) : null
        };
    }
    
    configure(newConfig) {
        this.config = { ...this.config, ...newConfig };
        
        if (this.debug) {
            console.log('⚙️ PingSystem configuration updated:', this.config);
        }
        
        // If active, restart with new config
        if (this.isActive) {
            this.stop();
            setTimeout(() => this.start(), 1000);
        }
    }
    
    // Health check endpoint simulation for development
    simulateHealthEndpoint() {
        if (!this.debug) return;
        
        // Override fetch for health endpoint in development
        const originalFetch = window.fetch;
        window.fetch = async (url, options) => {
            if (url.includes('/health')) {
                // Simulate server response
                return new Response(null, { 
                    status: 200, 
                    statusText: 'OK',
                    headers: {
                        'X-Simulated': 'true'
                    }
                });
            }
            return originalFetch(url, options);
        };
        
        console.log('🧪 Health endpoint simulation enabled for development');
    }
}

// Create singleton instance
const pingSystem = new PingSystem();

// Expose to window for debugging
if (!import.meta.env.PROD) {
    window.pingSystem = pingSystem;
    // Enable simulation in development
    pingSystem.simulateHealthEndpoint();
}

export default pingSystem;

// Utility functions for easy access
export const startPingSystem = () => pingSystem.start();
export const stopPingSystem = () => pingSystem.stop();
export const getPingStats = () => pingSystem.getStats();
export const configurePingSystem = (config) => pingSystem.configure(config);