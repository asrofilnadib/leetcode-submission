function Node(val) {
    this.val = val
    this.prev = null
    this.next = null
}

/**
 * @param {string} homepage
 */
var BrowserHistory = function(homepage) {
    this.current = new Node(homepage)
};

/** 
 * @param {string} url
 * @return {void}
 */
BrowserHistory.prototype.visit = function(url) {
    const node = new Node(url)
    node.prev = this.current
    this.current.next = node
    this.current = node
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.back = function(steps) {
    while (steps > 0 && this.current.prev) {
        this.current = this.current.prev
        steps--
    }
    return this.current.val
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.forward = function(steps) {
    while (steps > 0 && this.current.next) {
        this.current = this.current.next
        steps--
    }
    return this.current.val
};

/** 
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */
