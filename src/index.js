


let ArduinoFormatter = require("./formatters/arduinoFormatter");
/**
 * The entry point of the module. Here formatters for various languages can be created.
 * As of right now, only Java is available.
 *
 * The <code>formatUnit</code> is always the token to be used for line indentations (ex. 2 spaces and 4 spaces).
 *
 * Available functions:
 * - <pre><code>JavaFormatter createJavaFormatter(formatUnit:String)</code></pre>
 *
 */
const Formatter = {
  /**
   * Create an auto-formatter for java code.
   *
   * @param formatUnit The token to be used for line indentations. (ex. "  " or "    ")
   * @returns {JavaFormatter} Auto-formatter for java code.
   */
  
  createArduinoFormatter(formatUnit){
    return new ArduinoFormatter(formatUnit);
  }
}

module.exports = Formatter
