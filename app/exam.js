var exam = [{
    "question": "Which of the following consequences is most likely to occur due to an injection attack?",
    "correct": 2,
    "answers": [
        "Spoofing",
        "Cross-site request forgery",
        "Denial of service",
        "Insecure direct object references"
    ]
}, {
    "question": "Your application is created using a language that does not support a clear distinction between code and data. Which vulnerability is most likely to occur in your application?",
    "correct": 0,
    "answers": [
        "Injection",
        "Insecure direct object references",
        "Failure to restrict URL access",
        "Insufficient transport layer protection"
    ]
}, {
    "question": "Which of the following scenarios is most likely to cause an injection attack?",
    "correct": 0,
    "answers": [
        "Unvalidated input is embedded in an instruction stream.",
        "Unvalidated input can be distinguished from valid instructions.",
        "A Web application does not validate a client’s access to a resource.",
        "A Web action performs an operation on behalf of the user without checking a shared secret."
    ]
}, {
    "question": "A user is able to pass malicious input that invokes control codes in your Web application. Which vulnerability is most likely to occur in your Web application?",
    "correct": 0,
    "answers": [
        "Injection",
        "Insecure direct object references",
        "Failure to restrict URL access",
        "Insufficient transport layer protection"
    ]
}, {
    "question": "Which of the following is the best way to protect against injection attacks?",
    "correct": 1,
    "answers": [
        "SQL queries based on user input",
        "Input validation using an allow list",
        "Memory size checks",
        "Validate integer values before referencing arrays"
    ]
    },
 {
    "question": "Which of the following is most vulnerable to injection attacks?",
    "correct": 2,
    "answers": [
        "Session IDs",
        "Registry keys",
        "Regular expressions",
        "Server configuration files"
    ]
}, {
    "question": "Which character is most likely to be used for an SQL injection attack?",
    "correct": 0,
    "answers": [
        "Single quote (')",
        "Null (\\0) byte",
        "Less than sign(<)",
        "Greater than sign(>)"
    ]
}, {
    "question": "Which mitigation technique can help you strictly define valid input?",
    "correct": 0,
    "answers": [
        "Allow list",
        "Memory size checks",
        "Table indirection",
        "Escaping"
    ]
}, {
    "question": "Which of the following architecture-level techniques are the best approaches to prevent attacks based on malicious input?",
    "correct": 1,
    "answers": [
        "Allow list",
        "Table indirection",
        "Escaping",
        "Memory size checks"
    ]
}, {
    "question": "Which mitigation technique helps you tell the parser that a specific character is a literal and not a control character?",
    "correct": 2,
    "answers": [
        "Table indirection",
        "Allow list",
        "Escaping",
        "Block list"
    ]
}, {
    "question": "State whether the following statement is True or False. You should use a blacklist wherever possible; use whitelists only as a secondary defense.",
    "correct": 1,
    "answers": [
        "True",
        "False"
    ]
}, {
    "question": "Which of the following is the best way to define disallowed inputs?",
    "correct": 1,
    "answers": [
        "Allow list",
        "Block list",
        "Table indirection",
        "Escaping"
    ]
}, {
    "question": "Which of the following are injection attacks?",
    "correct": 0,
    "answers": [
        "Cross-site scripting",
        "Cross-site request forgery",
        "Insecure direct object references",
        "Broken authentication and session management"
    ]
}, {
    "question": "Which of the following languages is the primary target of cross-site scripting?",
    "correct": 0,
    "answers": [
        "HTML",
        "SQL",
        "XSLT",
        "XPath"
    ]
}, {
    "question": "Which of the following attacks occurs when a malicious user convinces a victim to send a request to a server with malicious input and the server echoes the input back to client?",
    "correct": 0,
    "answers": [
        "Reflected XSS",
        "Persistent XSS",
        "Insecure direct object references",
        "Failure to restrict URL access"
    ]
}, {
    "question": "Which of the following is the best way to prevent a DOM-based XSS attack?",
    "correct": 3,
    "answers": [
        "Set the HttpOnly flag in cookies",
        "Ensure that session IDs are not exposed in a URL",
        "Ensure that a different nonce is created for each request",
        "Validate any input that comes from another Web site"
    ]
}, {
    "question": "How does malicious input flow in a DOM-based XSS?",
    "correct": 1,
    "answers": [
        "From server to client",
        "From client to itself",
        "From attacker to server",
        "From victim to server"
    ]
}, {
    "question": "Which of the following is the best way to prevent malicious input exploiting your application?",
    "correct": 0,
    "answers": [
        "Input validation using an allow List",
        "Using encryption",
        "Using table indirection",
        "Using GET/POST parameters"
    ]
}, {
    "question": "You should set the HttpOnly flag in a cookie to ensure that:",
    "correct": 0,
    "answers": [
        "The cookie is not available to client scripts.",
        "The cookie is deleted when the user closes the browser.",
        "The cookie is sent over an encrypted channel.",
        "The cookie is a persistent cookie."
    ]
}, {
    "question": "You should set a secure flag in a cookie to ensure that:",
    "correct": 2,
    "answers": [
        "The cookie is a persistent cookie.",
        "The cookie is not available to client script.",
        "The cookie is sent over an encrypted channel.",
        "The cookie is deleted when the user closes the browser."
    ]
}, {
    "question": "An attacker submits data to the server and the data is stored on the server. Which type of vulnerability is most likely to occur in your application?",
    "correct": 2,
    "answers": [
        "DOM-based XSS",
        "Reflected XSS",
        "Persistent XSS",
        "Cross-site request forgery"
    ]
}, {
    "question": "Which of the following input sources can be directly controlled by a malicious user?",
    "correct": 0,
    "answers": [
        "GET/POST parameters",
        "Server configuration files",
        "Ports",
        "Server code"
    ]
}, {
    "question": "Which of the following scenarios is most likely to result in broken authentication and session management vulnerabilities?",
    "correct": 0,
    "answers": [
        "Poorly implemented custom code is used.",
        "Session-based indirection is used.",
        "Unused and unnecessary services, code, and DLLs are disabled.",
        "The HttpOnly flag is set in cookies."
    ]
}, {
    "question": "Which of the following actions should you take before implementing a custom authentication and session management system?",
    "correct": 1,
    "answers": [
        "Find out if the HttpOnly flag is set in cookies.",
        "Find out if you can use a small extension to an existing component to implement the system.",
        "Find out if form variables are available to store data.",
        "Find out if you need to use session-based indirection."
    ]
}, {
    "question": "State whether the following statement is True or False. When implementing an authentication or session system, you should ensure that new session IDs are not created at login.",
    "correct": 1,
    "answers": [
        "True",
        "False"
    ]
}, {
    "question": "Which of the following functionalities should you include in an authentication and session management system?",
    "correct": 0,
    "answers": [
        "Logout functionality",
        "Regular expressions",
        "Escaping functionality",
        "Forwarding system functionality"
    ]
}, {
    "question": "Why should you use CAPTCHA?",
    "correct": 2,
    "answers": [
        "To create cryptographically random session IDs",
        "To protect credentials by using encryption or cryptographic salt and hash",
        "To protect authentication systems from automated or brute-force attacks",
        "To ensure that authentication systems implement inactivity timeout functionality"
    ]
}, {
    "question": "What should you do before passing credentials over the network?",
    "correct": 0,
    "answers": [
        "Replace the credentials with a cryptographic salt and hash.",
        "Accept session IDs from URLs.",
        "Share the credentials with the client.",
        "Use persistent cookies to manage session IDs."
    ]
}, {
    "question": "Which location should you ideally use to store a session ID?",
    "correct": 3,
    "answers": [
        "URLs",
        "Form variables",
        "Persistent cookies",
        "Non-persistent cookies"
    ]
}, {
    "question": "Which of the following is the best way to ensure that JavaScript cannot be used to access a cookie?",
    "correct": 1,
    "answers": [
        "Set the secure flag in the cookie",
        "Set the HttpOnly flag in the cookie",
        "Use the CAPTCHA system",
        "Use non-persistent cookies"
    ]
}, {
    "question": "Which of the following is an authentication system mandatory requirement?",
    "correct": 2,
    "answers": [
        "Form variables are used for managing session IDs.",
        "Use a GOTCHA to prevent automated attacks.",
        "User logout and session inactivity controls.",
        "Session IDs are only accepted from cookies and parameter variables."
    ]
}, {
    "question": "A session-based system authenticates a user to a Web site to provide access to restricted resources. To increase security in this scenario, an authentication token should meet which of the following requirements?",
    "correct": 3,
    "answers": [
        "It should identify returning users to the site.",
        "It should be public information.",
        "It should always use a persistent cookie.",
        "It should always use a non-persistent cookie."
    ]
}, {
    "question": "State whether the following statement is True or False. An identification token is a replacement for a user’s credentials and should allow access to restricted resources of a Web site.",
    "correct": 1,
    "answers": [
        "True",
        "False"
    ]
}, {
    "question": "Which of the following tasks is performed by a session-based system?",
    "correct": 0,
    "answers": [
        "Identifying returning users",
        "Using form variables for managing session IDs",
        "Using the HTTP protocol",
        "Sending successful logins to a well-known location"
    ]
}, {
    "question": "Which threat is most likely to occur when a Web application fails to validate a client's access to a resource?",
    "correct": 2,
    "answers": [
        "Injection",
        "Cross-site scripting",
        "Insecure direct object reference",
        "Cross-site request forgery"
    ]
}, {
    "question": "Which of the following objects is most susceptible to an insecure direct object reference attack?",
    "correct": 1,
    "answers": [
        "Nonpersistent cookies",
        "Registry keys",
        "Conditional constructs",
        "GET/POST parameters"
    ]
}, {
    "question": "Which of the following vulnerabilities is most likely to occur due to an insecure direct object reference attack?",
    "correct": 3,
    "answers": [
        "Executing commands on the server.",
        "Impersonating any user on the system.",
        "Modifying SQL data pointed to by the query.",
        "Accessing a resource without authorization."
    ]
}, {
    "question": "Which of the following is the best way to mitigate the threat of an insecure direct object reference attack?",
    "correct": 0,
    "answers": [
        "Use session-based indirection.",
        "Use POST parameters instead of GET parameters.",
        "Use a regular expression.",
        "Send successful logins to a well-known location instead of automatic redirection."
    ]
}, {
    "question": "State whether the following statement is True or False. Time of Check Time of Use (TOCTOU) occurs if the authorization check is performed on one page of a Web site and the resource is used on a different page.",
    "correct": 0,
    "answers": [
        "True",
        "False"
    ]
}, {
    "question": "Your Web application stores information about many accounts. Which threat is your Web application susceptible to if you can manipulate the URL of an account page to access all accounts?",
    "correct": 1,
    "answers": [
        "Cross-site request forgery",
        "Insecure direct object reference",
        "Cross-site scripting",
        "Injection"
    ]
}, {
    "question": "Which of the following threats is most likely to be caused by poor input validation?",
    "correct": 1,
    "answers": [
        "Enabling of IPSec",
        "Insecure direct object reference",
        "Insecure cryptographic storage",
        "Insufficient transport layer protection"
    ]
}, {
    "question": "Which threat is most likely to occur when a POST parameter performs an operation on behalf of a user without checking a shared secret?",
    "correct": 0,
    "answers": [
        "Cross-site request forgery",
        "Insecure direct object reference",
        "Cross-site scripting",
        "Injection"
    ]
}, {
    "question": "Which of the following is the most common result of a cross-site request forgery?",
    "correct": 0,
    "answers": [
        "Elevation of privilege",
        "Disabled security features",
        "Enabling of IPSec",
        "Misconfigured security features"
    ]
}, {
    "question": "An attacker lures a victim to malicious content on a Web site. A request is automatically sent to the vulnerable site which includes victim’s credentials. Which attack is most likely to occur in this scenario?",
    "correct": 3,
    "answers": [
        "Injection",
        "Cross-site scripting",
        "Insecure direct object reference",
        "Cross-site request forgery"
    ]
}, {
    "question": "State whether the following statement is True or False. The downside of a nonce is that it needs to be stored on the client.",
    "correct": 1,
    "answers": [
        "True",
        "False"
    ]
}, {
    "question": "What should you add to an HMAC to ensure that the secret value is unique for each request?",
    "correct": 3,
    "answers": [
        "Salt",
        "Nonce",
        "Session ID",
        "Timestamp"
    ]
}, {
    "question": "Which of the following practices should you observe in order to implement defense-in-depth techniques against CSRF attacks?",
    "correct": 2,
    "answers": [
        "Use GET parameters",
        "Use automatic redirection.",
        "Don’t include secrets in the URL.",
        "Resubmit POST parameters during redirection."
    ]
}, {
    "question": "State whether the following statement is True or False. HTTP GET parameters limit the types of manipulation a malicious user can perform on the victim to forge a request.",
    "correct": 1,
    "answers": [
        "True",
        "False"
    ]
}, {
    "question": "Which of the following mistakes is most often associated with a security misconfiguration threat?",
    "correct": 1,
    "answers": [
        "Cross-site request forgery",
        "Failure to disable default accounts",
        "Bad cryptography",
        "Unsafe key storage"
    ]
}, {
    "question": "You have not yet applied some recent service packs and updates to your Web application. Which of the following threats is your Web server susceptible to?",
    "correct": 1,
    "answers": [
        "Injection",
        "Security misconfiguration",
        "Insecure cryptographic storage",
        "Cross-site request forgery"
    ]
}, {
    "question": "Which of the following is the best way to reevaluate your environment and address new threats?",
    "correct": 0,
    "answers": [
        "Add or remove network segments.",
        "Use the white-list validation of allowed input technique.",
        "Use custom cryptographic algorithms.",
        "Use your browser to forge unauthorized requests."
    ]
}, {
    "question": "Which of the following procedures are involved in the hardening process?",
    "correct": 0,
    "answers": [
        "Disable unnecessary features.",
        "Resubmit POST parameters during redirection.",
        "Repeat the process at random intervals.",
        "Update the environment with changes only when needed."
    ]
}, {
    "question": "Which of the following consequence is most likely to result if your production environment does not match your development, testing, and staging environments?",
    "correct": 0,
    "answers": [
        "Your application may not work as expected.",
        "Testing your application may take a long time.",
        "Your application may be expensive to administer.",
        "Your application may have too many configuration files."
    ]
}, {
    "question": "Which of the following can result in insecure cryptography?",
    "correct": 0,
    "answers": [
        "Unsalted hash",
        "Unused services",
        "Default accounts",
        "Rotating keys frequently"
    ]
}, {
    "question": "Which of the following is most likely to result in insecure cryptography?",
    "correct": 1,
    "answers": [
        "Unused services",
        "Unsalted hash",
        "New products",
        "Missing patches"
    ]
}, {
    "question": "Which of the following may result in cryptographic weakness?",
    "correct": 1,
    "answers": [
        "Failure to restrict URL access",
        "Insufficient cryptographic protocols",
        "Missing patches",
        "Unnecessary/unused services or features"
    ]
}, {
    "question": "Which of the following protocols is a network layer encryption protocol?",
    "correct": 2,
    "answers": [
        "HTTP",
        "EFS",
        "IPSec",
        "Kerberos"
    ]
}, {
    "question": "Which of the following factors helps you secure keys?",
    "correct": 0,
    "answers": [
        "Complexity",
        "Session-based indirection",
        "Escaping",
        "Encryption"
    ]
}, {
    "question": "Which of the following combines public-key cryptography with a cryptographic hash?",
    "correct": 1,
    "answers": [
        "Nonce",
        "Digital signature",
        "SSL",
        "Salt"
    ]
}, {
    "question": "hich of the following depicts the typical impact of failure to restrict URL access?",
    "correct": 2,
    "answers": [
        "Attackers perform man-in-the-middle attacks.",
        "Attackers impersonate any user on the system.",
        "Attackers invoke functions and services they have no authorization for.",
        "Attackers perform all actions that the victims themselves have permission to perform."
    ]
}, {
    "question": "Which of the following actions should you take to test the security of your Web application?",
    "correct": 3,
    "answers": [
        "Use policy mechanisms.",
        "Use a simple and positive model at every layer.",
        "Set the secure flag on session ID cookies.",
        "Use your browser to forge unauthorized requests."
    ]
}, {
    "question": "Which of the following should you use to protect the connections between the physical tiers of your application?",
    "correct": 1,
    "answers": [
        "EFS",
        "SSL",
        "HTTP",
        "Kerberos"
    ]
}, {
    "question": "Which of the following is the best way to implement transport layer protection?",
    "correct": 1,
    "answers": [
        "Install IDS",
        "Enable SSL",
        "Set the HttpOnly flag on session ID cookies",
        "Perform client-side validation."
    ]
}, {
    "question": "Which of the following is most likely to result from unvalidated redirects and forwards?",
    "correct": 3,
    "answers": [
        "Brute force attack",
        "Network sniffing",
        "Man-in-the-middle attack",
        "Bypassed authorization checks"
    ]
}, {
    "question": "Which of the following is the best way to protect a Web application from unvalidated redirects and forwards?",
    "correct": 0,
    "answers": [
        "Validate the referrer header.",
        "Use extended validation certificates.",
        "Use the escaping technique.",
        "Disallow requests to unauthorized file types."
    ]
}, {
    "question": "Which of the following is the best way to detect unvalidated redirects and forwards?",
    "correct": 2,
    "answers": [
        "Use internal transfers without authorizing the user for target URL",
        "Use your browser to forge unauthorized requests",
        "Use weblogs to identify redirects and forwards",
        "Use policy mechanisms"
    ]
}, {
    "question": "State whether the following statement is True or False. Most security issues are related to input and a user’s ability to interact with and control input.",
    "correct": 0,
    "answers": [
        "True",
        "False"
    ]
}, {
    "question": "State whether the following statement is True or False. If user input can be confused for instructions in the language or the way the language is applied, then the language is vulnerable to an injection attack.",
    "correct": 0,
    "answers": [
        "True",
        "False"
    ]
}, {
    "question": "In which of the following scenarios should you use the escaping technique?",
    "correct": 0,
    "answers": [
        "When user input is echoed back to the user in HTML",
        "When you need to validate any input as valid input",
        "When you are trying to protect against regular expression injection",
        "When you need to tell the interpreter that input is code"
    ]
}, {
    "question": "Which of the following is the best way to prevent unvalidated redirect and forwards vulnerabilities?",
    "correct": 0,
    "answers": [
        "Use an allow list, such as table indirection.",
        "Use client-side validation.",
        "Allow only absolute redirects.",
        "Use session-based indirection."
    ]
}
]
