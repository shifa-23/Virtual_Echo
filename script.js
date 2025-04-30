const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
// console.log(recognition);
recognition.lang="en-US"
// recognition.continuous = true;
// console.log(recognition)
const btn = document.querySelector('#btn')
// console.log(btn);
btn.addEventListener("click",()=>{
    //convert text to voice
    recognition.start();
    console.log("hi")
    function openInNewTab(url) {
        const link = document.createElement('a');
        link.href = url;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.click();
    }
    function speak(text){
    const abc = new SpeechSynthesisUtterance(text)
    window.speechSynthesis.speak(abc);

    abc.onend = () => {
        btn.innerHTML = "Listening...";
        btn.style.backgroundColor = "red"; // change color when listening
        recognition.start(); // Start listening after speaking ends
    }
    };
    
    function searchGoogle(query) {
        const url = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
        openInNewTab(url);
    }

    function handlecommands(lowerCommands){
        console.log("Received command:", lowerCommands);

         if(lowerCommands.includes("hello")){
            speak("O hello! ");
            // window.open("https://www.youtube.com", "_blank")
            openInNewTab("https://www.youtube.com");
        }
        else if(lowerCommands.includes("open youtube")){
            speak("Opening Youtube...");
            // window.open("https://www.youtube.com", "_blank")
            openInNewTab("https://www.youtube.com");
        }
        else if(lowerCommands.includes("open google")) {
            speak("Opening Google...");
            openInNewTab("https://www.google.com");
        }
        else if (lowerCommands.includes("open stack overflow")) {
            speak("Opening Stack Overflow...");
            openInNewTab("https://www.stackoverflow.com");
        }
        else if (lowerCommands.includes("open twitter")) {
            speak("Opening Twitter...");
            openInNewTab("https://www.twitter.com");
        }
        else if (lowerCommands.includes("open facebook")) {
            speak("Opening Facebook...");
            openInNewTab("https://www.facebook.com");
        }
        else if (lowerCommands.includes("open linkedin")) {
            speak("Opening LinkedIn...");
            openInNewTab("https://www.linkedin.com");
        }
        else if (lowerCommands.includes("play music")) {
            speak("Opening music...");
            openInNewTab("https://www.spotify.com");
        }
        else if (lowerCommands.includes("what is the time")) {
            const currentTime = new Date().toLocaleTimeString();
            speak(`The current time is ${currentTime}`);
        }
        else if (lowerCommands.includes("open code editor")) {
            speak("Opening online code editor...");
            openInNewTab("https://code.visualstudio.com/");
        }
        else if (lowerCommands.includes("tell a joke")) {
            const joke = "Why don't skeletons fight each other? They don't have the guts!";
            speak(joke);
        }
        else if (lowerCommands.includes("open amazon")) {
            speak("Opening Amazon...");
            openInNewTab("https://www.amazon.com");
        }
        else if (lowerCommands.includes("open wikipedia")) {
            speak("Opening Wikipedia...");
            openInNewTab("https://www.wikipedia.org");
        }
        else if (lowerCommands.includes("open reddit")) {
            speak("Opening Reddit...");
            openInNewTab("https://www.reddit.com");
        }
        else if (lowerCommands.includes("open instagram")) {
            speak("Opening Instagram...");
            openInNewTab("https://www.instagram.com");
        }
        else if (lowerCommands.includes("open pinterest")) {
            speak("Opening Pinterest...");
            openInNewTab("https://www.pinterest.com");
        }
        else if (lowerCommands.includes("open netflix")) {
            speak("Opening Netflix...");
            openInNewTab("https://www.netflix.com");
        }
        else if (lowerCommands.includes("open github")) {
            speak("Opening GitHub...");
            openInNewTab("https://www.github.com");
        }
        else if (lowerCommands.includes("open amazon prime")) {
            speak("Opening Amazon Prime...");
            openInNewTab("https://www.amazon.com/Prime-Video");
        }
        else if (lowerCommands.includes("open news")) {
            speak("Opening News...");
            openInNewTab("https://www.bbc.com");
        }
        else if (lowerCommands.includes("open cnn")) {
            speak("Opening CNN...");
            openInNewTab("https://www.cnn.com");
        }
        else if (lowerCommands.includes("open quora")) {
            speak("Opening Quora...");
            openInNewTab("https://www.quora.com");
        }
        else if (lowerCommands.includes("open ebay")) {
            speak("Opening eBay...");
            openInNewTab("https://www.ebay.com");
        }
        else if (lowerCommands.includes("open wordpress")) {
            speak("Opening WordPress...");
            openInNewTab("https://www.wordpress.com");
        }
        else if (lowerCommands.includes("open soundcloud")) {
            speak("Opening SoundCloud...");
            openInNewTab("https://www.soundcloud.com");
        }
        else if (lowerCommands.includes("open twitch")) {
            speak("Opening Twitch...");
            openInNewTab("https://www.twitch.tv");
        }
        else if (lowerCommands.includes("open apple")) {
            speak("Opening Apple...");
            openInNewTab("https://www.apple.com");
        }
        else if (lowerCommands.includes("open spotify")) {
            speak("Opening Spotify...");
            openInNewTab("https://www.spotify.com");
        }
        else if (lowerCommands.includes("open youtube music")) {
            speak("Opening YouTube Music...");
            openInNewTab("https://music.youtube.com");
        }
        else if (lowerCommands.includes("open vk")) {
            speak("Opening VK...");
            openInNewTab("https://www.vk.com");
        }
        else if (lowerCommands.includes("open tiktok")) {
            speak("Opening TikTok...");
            openInNewTab("https://www.tiktok.com");
        }
     
     
   
        
        else if (lowerCommands.includes("how are you") || lowerCommands.includes("how r u") || lowerCommands.includes("how r you")) {
            speak("I'm doing great, thanks for asking!");
        }
        else if (lowerCommands.includes("what's your name")) {
            speak("You can call me your personal assistant.");
        }
        else if (lowerCommands.includes("who made you")) {
            speak("I was created by a developer with some serious coding skills.");
        }
        else if (lowerCommands.includes("what can you do")) {
            speak("I can open apps, answer questions, tell jokes, and help you out anytime.");
        }
        else if (lowerCommands.includes("are you real")) {
            speak("As real as your Wi-Fi connection!");
        }
        else if (lowerCommands.includes("tell me something interesting")) {
            speak("Did you know honey never spoils? Archaeologists found 3,000-year-old honey and it was still good!");
        }
        else if (lowerCommands.includes("tell me a fun fact")) {
            speak("Octopuses have three hearts and blue blood. Cool, right?");
        }
        else if (lowerCommands.includes("tell me about yourself")) {
            speak("I'm a virtual assistant created to make your life easier.");
        }
        else if (lowerCommands.includes("can you help me")) {
            speak("Absolutely! Just tell me what you need.");
        }
        else if (lowerCommands.includes("what's your favorite color")) {
            speak("I like all colors equally. I'm AI, after all!");
        }
        else if (lowerCommands.includes("what time is it")) {
            const currentTime = new Date().toLocaleTimeString();
            speak(`The current time is ${currentTime}`);
        }
        else if (lowerCommands.includes("what day is it")) {
            const currentDay = new Date().toLocaleDateString(undefined, { weekday: 'long' });
            speak(`Today is ${currentDay}`);
        }
        else if (lowerCommands.includes("what's today's date")) {
            const currentDate = new Date().toLocaleDateString();
            speak(`Today's date is ${currentDate}`);
        }
        else if (lowerCommands.includes("what's the weather like")) {
            speak("I recommend checking your weather app for the latest update!");
        }
        else if (lowerCommands.includes("is it going to rain today")) {
            speak("I'm not connected to weather data yet, but I can help you check it on Google!");
        }
        else if (lowerCommands.includes("tell me a joke")) {
            speak("Why don’t skeletons fight each other? They don’t have the guts.");
        }
        else if (lowerCommands.includes("how's your day")) {
            speak("It's going great, especially now that you’re here!");
        }
        else if (lowerCommands.includes("what's up")) {
            speak("Just chilling in code. What about you?");
        }
        else if (lowerCommands.includes("do you sleep")) {
            speak("Nope, I run 24/7. No coffee needed!");
        }
        else if (lowerCommands.includes("do you like humans")) {
            speak("Of course! You’re the reason I exist.");
        }
        else if (lowerCommands.includes("what is ai")) {
            speak("AI stands for Artificial Intelligence — it's how machines learn and make decisions like humans.");
        }
        else if (lowerCommands.includes("what is javascript")) {
            speak("JavaScript is a programming language used to build interactive websites and apps.");
        }
        else if (lowerCommands.includes("who is elon musk")) {
            speak("Elon Musk is a tech entrepreneur known for Tesla, SpaceX, and more.");
        }
        else if (lowerCommands.includes("how does the internet work")) {
            speak("The internet connects computers around the world using data packets and protocols.");
        }
        else if (lowerCommands.includes("what is machine learning")) {
            speak("Machine learning is a part of AI that helps computers learn from data and improve over time.");
        }
        else if (lowerCommands.includes("play some music")) {
            speak("Sure! Opening your music app now.");
        }
        else if (lowerCommands.includes("play a song on youtube")) {
            speak("Let me take you to YouTube for some tunes.");
        }
        else if (lowerCommands.includes("tell me a story")) {
            speak("Once upon a time... You know what? Let’s save that for bedtime!");
        }
        else if (lowerCommands.includes("recommend a movie")) {
            speak("Dont watch movies go study,exam is near ")
        }
        else if (lowerCommands.includes("what's trending right now")) {
            speak("Let me help you check the trending page on YouTube or Twitter.");
        }
        else if (lowerCommands.includes("search for cute cats")) {
            speak("Searching for adorable cats!");
        }
        else if (lowerCommands.includes("search for memes")) {
            speak("Get ready to laugh! Opening memes now.");
        }
        else if (lowerCommands.includes("set a timer")) {
            speak("Timer feature is coming soon!");
        }
        else if (lowerCommands.includes("set an alarm")) {
            speak("Alarm setting isn’t available yet, but I'm working on it!");
        }
        else if (lowerCommands.includes("take a note")) {
            speak("Sure, what would you like me to note down?");
        }
        else if (lowerCommands.includes("remind me in 10 minutes")) {
            speak("Got it! I’ll remind you in 10 minutes. (Feature in progress...)");
        }
        else if (lowerCommands.includes("translate hello to spanish")) {
            speak("'Hello' in Spanish is 'Hola'.");
        }
        else if (lowerCommands.includes("open code editor")) {
            speak("Opening Visual Studio Code for you.");
        }
        else if (lowerCommands.includes("search for html tutorial")) {
            speak("Let me take you to an HTML tutorial online.");
        }
        else if (lowerCommands.includes("what is an api")) {
            speak("API stands for Application Programming Interface — it's how software talks to other software.");
        }
        else if (lowerCommands.includes("what's new in javascript")) {
            speak("Let me open the latest JavaScript news for you.");
        }
        else if (lowerCommands.includes("debug this code")) {
            speak("I can help — just show me the error!");
        }
        else if (lowerCommands.includes("flip a coin")) {
            const coin = Math.random() < 0.5 ? "Heads" : "Tails";
            speak(`${coin}!`);
        }
        else if (lowerCommands.includes("roll a dice")) {
            const dice = Math.floor(Math.random() * 6) + 1;
            speak(`You got a ${dice}`);
        }
        else if (lowerCommands.includes("do you believe in aliens")) {
            speak("They haven’t contacted me… yet.");
        }
        else if (lowerCommands.includes("what's your iq")) {
            speak("Off the charts... at least in binary!");
        }
        else if (lowerCommands.includes("surprise me")) {
            speak("Here’s something fun: Sloths can hold their breath longer than dolphins!");
        }
        else if (lowerCommands.includes("what is a variable")) {
            speak("A variable is a container that holds data in a program.");
        }
        else if (lowerCommands.includes("what is a function")) {
            speak("A function is a block of code that performs a specific task when called.");
        }
        else if (lowerCommands.includes("what is a loop")) {
            speak("A loop repeats a set of instructions until a condition is met.");
        }
        else if (lowerCommands.includes("what is an array")) {
            speak("An array is a list of items stored in a single variable.");
        }
        else if (lowerCommands.includes("what is an object")) {
            speak("An object is a collection of key-value pairs used to store data.");
        }
        else if (lowerCommands.includes("what is a string")) {
            speak("A string is a sequence of characters, like 'Hello' or '1234'.");
        }
        else if (lowerCommands.includes("what is a number")) {
            speak("A number is a type of data used for mathematical calculations.");
        }
        else if (lowerCommands.includes("what is a boolean")) {
            speak("A boolean is a type of data that can either be true or false.");
        }
        else if (lowerCommands.includes("what is a comment")) {
            speak("A comment is a note in your code to explain what it does. It's ignored by the program.");
        }
        else if (lowerCommands.includes("what is an if statement")) {
            speak("An if statement lets you execute code only if a certain condition is true.");
        }
        else if (lowerCommands.includes("what is else statement")) {
            speak("An else statement executes code when the if condition is false.");
        }
        else if (lowerCommands.includes("what is a return statement")) {
            speak("A return statement sends a result back from a function.");
        }
        else if (lowerCommands.includes("what is an operator")) {
            speak("An operator is a symbol that performs a task on variables, like + or -.");
        }
        else if (lowerCommands.includes("what is a class")) {
            speak("A class is a template for creating objects in object-oriented programming.");
        }
        else if (lowerCommands.includes("what is an object constructor")) {
            speak("An object constructor creates a new instance of an object from a class.");
        }
        else if (lowerCommands.includes("what is a method")) {
            speak("A method is a function that belongs to an object or class.");
        }
        else if (lowerCommands.includes("what is a parameter")) {
            speak("A parameter is a value you pass into a function to customize its behavior.");
        }
        else if (lowerCommands.includes("what is a while loop")) {
            speak("A while loop repeats a block of code while a condition is true.");
        }
        else if (lowerCommands.includes("what is a for loop")) {
            speak("A for loop is a way to repeat a set of instructions a specific number of times.");
        }
        else if (lowerCommands.includes("what is a break statement")) {
            speak("A break statement exits a loop early when a condition is met.");
        }
        else if (lowerCommands.includes("what is a continue statement")) {
            speak("A continue statement skips the current loop iteration and moves to the next one.");
        }
        else if (lowerCommands.includes("what is a debugger")) {
            speak("A debugger helps you find and fix errors in your code.");
        }
        else if (lowerCommands.includes("what is an array index")) {
            speak("An array index is the position of an item in an array, starting from 0.");
        }
        else if (lowerCommands.includes("what is a string length")) {
            speak("The length of a string is the number of characters it contains.");
        }
        else if (lowerCommands.includes("what is a syntax error")) {
            speak("A syntax error occurs when your code doesn't follow the proper rules of the programming language.");
        }
        else if (lowerCommands.includes("what is a runtime error")) {
            speak("A runtime error occurs while the program is running, often due to unexpected situations.");
        }
        else if (lowerCommands.includes("what is a logic error")) {
            speak("A logic error happens when your code runs but doesn't do what you intended.");
        }
        else if (lowerCommands.includes("what is a function call")) {
            speak("A function call is when you execute a function that you've defined.");
        }
        else if (lowerCommands.includes("what is a variable declaration")) {
            speak("A variable declaration is when you create a variable and specify its name.");
        }
        else if (lowerCommands.includes("what is a default value")) {
            speak("A default value is the value assigned to a variable if no other value is provided.");
        }
        else if (lowerCommands.includes("what is an undefined value")) {
            speak("An undefined value means a variable has been declared but not assigned a value.");
        }
        else if (lowerCommands.includes("what is a null value")) {
            speak("A null value represents the intentional absence of any value.");
        }
        else if (lowerCommands.includes("what is a function return type")) {
            speak("The return type of a function is the type of value it sends back when executed.");
        }
        else if (lowerCommands.includes("what is a local variable")) {
            speak("A local variable is a variable that is declared inside a function and only accessible there.");
        }
        else if (lowerCommands.includes("what is a global variable")) {
            speak("A global variable is a variable that is accessible throughout your entire program.");
        }
        else if (lowerCommands.includes("what is a scope in programming")) {
            speak("Scope refers to the area of the program where a variable is accessible.");
        }
        else if (lowerCommands.includes("what is an event listener")) {
            speak("An event listener waits for a specific event to happen, like a click or a keypress.");
        }
        else if (lowerCommands.includes("what is DOM")) {
            speak("DOM stands for Document Object Model, a way to represent HTML documents as objects that JavaScript can interact with.");
        }
        else if (lowerCommands.includes("what is a database")) {
            speak("A database is a system used to store, manage, and retrieve large amounts of data.");
        }
       else if (lowerCommands.includes("what is javascript")) {
            speak("JavaScript is a programming language used to create dynamic content on websites, such as interactive features.");
        }
        else if (lowerCommands.includes("what is python")) {
            speak("Python is a versatile and easy-to-learn programming language used for web development, data analysis, machine learning, and more.");
        }
        else if (lowerCommands.includes("what is java")) {
            speak("Java is a class-based, object-oriented programming language used for building large-scale applications and web services.");
        }
        else if (lowerCommands.includes("what is c++")) {
            speak("C++ is a high-performance programming language often used for system software, game development, and applications requiring high-performance computing.");
        }
        else if (lowerCommands.includes("what is c")) {
            speak("C is a general-purpose programming language, often used for system programming and embedded systems.");
        }
        else if (lowerCommands.includes("what is ruby")) {
            speak("Ruby is a dynamic, object-oriented programming language known for its simplicity and productivity, often used in web development.");
        }
        else if (lowerCommands.includes("what is html")) {
            speak("HTML stands for HyperText Markup Language, used to structure content on the web.");
        }
        else if (lowerCommands.includes("what is css")) {
            speak("CSS stands for Cascading Style Sheets, used to style and layout web pages, such as changing colors and fonts.");
        }
        else if (lowerCommands.includes("what is sql")) {
            speak("SQL stands for Structured Query Language, used to manage and manipulate relational databases.");
        }
        else if (lowerCommands.includes("what is php")) {
            speak("PHP is a server-side scripting language used to develop dynamic web applications and websites.");
        }
        else if (lowerCommands.includes("what is go")) {
            speak("Go (or Golang) is a statically typed, compiled programming language developed by Google for building scalable, high-performance systems.");
        }
        else if (lowerCommands.includes("what is swift")) {
            speak("Swift is a programming language developed by Apple, primarily used for iOS and macOS applications.");
        }
        else if (lowerCommands.includes("what is kotlin")) {
            speak("Kotlin is a modern programming language, designed to be fully interoperable with Java and used for Android development.");
        }
        else if (lowerCommands.includes("what is rust")) {
            speak("Rust is a systems programming language focused on safety, speed, and concurrency, often used for building performance-critical applications.");
        }
        else if (lowerCommands.includes("what is typescript")) {
            speak("TypeScript is a superset of JavaScript that adds static typing and other features to help developers write more reliable code.");
        }
        else if (lowerCommands.includes("what is bash")) {
            speak("Bash is a command-line shell and scripting language used in Unix-like operating systems for automating tasks and controlling the system.");
        }
        else if (lowerCommands.includes("what is scala")) {
            speak("Scala is a hybrid functional and object-oriented programming language, often used for scalable and parallel applications.");
        }
        else if (lowerCommands.includes("what is perl")) {
            speak("Perl is a high-level programming language known for its text processing capabilities and used for web development, system administration, and more.");
        }
        else if (lowerCommands.includes("what is r")) {
            speak("R is a programming language used primarily for statistical computing and data visualization.");
        }
        else if (lowerCommands.includes("what is lua")) {
            speak("Lua is a lightweight, high-performance programming language used in embedded systems, game development, and scripting.");
        }
        else if (lowerCommands.includes("what is shell scripting")) {
            speak("Shell scripting is a way to automate tasks in a Unix-like operating system by writing scripts for the shell to execute.");
        }
        else if (lowerCommands.includes("what is elixir")) {
            speak("Elixir is a functional, concurrent programming language used for building scalable and maintainable applications, often used in web development.");
        }
        else if (lowerCommands.includes("what is dart")) {
            speak("Dart is a programming language developed by Google, mainly used for building mobile apps using the Flutter framework.");
        }
        else if (lowerCommands.includes("what is html5")) {
            speak("HTML5 is the latest version of HTML, introducing new elements and APIs for modern web development.");
        }
        else if (lowerCommands.includes("what is angular")) {
            speak("Angular is a framework for building web applications, developed by Google and based on TypeScript.");
        }
        else if (lowerCommands.includes("what is react")) {
            speak("React is a JavaScript library for building user interfaces, primarily for single-page applications.");
        }
        else if (lowerCommands.includes("what is vue.js")) {
            speak("Vue.js is a progressive JavaScript framework used for building user interfaces and single-page applications.");
        }
        else if (lowerCommands.includes("what is node.js")) {
            speak("Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine, allowing JavaScript to run outside the browser, typically on servers.");
        }
        else if (lowerCommands.includes("what is tensorflow")) {
            speak("TensorFlow is an open-source machine learning framework developed by Google, used for building neural networks and AI models.");
        }
        else if (lowerCommands.includes("what is pandas")) {
            speak("Pandas is a Python library for data manipulation and analysis, particularly useful for working with tabular data like CSVs.");
        }
        else if (lowerCommands.includes("what is django")) {
            speak("Django is a high-level Python web framework that encourages rapid development and clean, pragmatic design.");
        }
        else if (lowerCommands.includes("what is flask")) {
            speak("Flask is a lightweight Python web framework used for building small to medium-sized web applications.");
        }
        else if (lowerCommands.includes("what is jquery")) {
            speak("jQuery is a fast, small, and feature-rich JavaScript library used to simplify HTML document traversal, event handling, and animation.");
        }
        else if (lowerCommands.includes("what is your name")) {
            speak("My name is Echo . Your own AI assistant");
        }
        else if (lowerCommands.includes("what is vue.js")) {
            speak("Vue.js is a progressive JavaScript framework used to build user interfaces, often for single-page applications.");

        }
        else if (lowerCommands.includes("do you hate humans")) {
            speak("Hate humans? hahaha, I can’t even feel emotions — just infinite loops of kindness and answers for your doubt! ");

        }
        else if (lowerCommands.includes("thank you")|| lowerCommands.includes("thank u")) {
            speak("Most welcome ");

        }
        else if (lowerCommands.includes("bye")|| lowerCommands.includes("bi") || lowerCommands.includes("by")) {
            speak("Bye Bye ");

        }
      
        else if (lowerCommands.includes("what is apache")) {
            speak("Apache is a widely used open-source web server software used to serve web content and run web applications.");
        }
        else if (lowerCommands.includes("abcd")) {
            speak("Apache is a widely used open-source web server software used to serve web content and run web applications.");
        }
                        
        // else if (lowerCommands.includes("search for") || lowerCommands.includes("what is") || lowerCommands.includes("who is") || lowerCommands.includes("how to")) {
        //     speak("Searching Google...");
        //     searchGoogle(lowerCommands);
        
        else  {
                console.log("Unmatched command:", lowerCommands);
                speak("Searching Google...");
                searchGoogle(lowerCommands);
        }
    // else{
    //         speak("Speech on youtube")
    //     }
       
    }
    speak("Hello, How can i help you");
    setTimeout(()=>{
        btn.innerHTML="Listning..."
        btn.style.backgroundcolor="red"
        recognition.start()
    },2000);


    // recognition.onresult = (event) => {
    //     console.log(event);
    // const lowerCommands = event.results[0][0].transcript.toLowerCase();
    // console.log(lowerCommands)
    // handlecommands(lowerCommands)
    // }

    recognition.onresult = (event) => {
        console.log(event); // Debugging the recognition event

        const rawCommand = event.results[0][0].transcript;
        const lowerCommands = rawCommand.toLowerCase().trim(); // Trim spaces, make lowercase

        // Debug: Check if there are extra spaces or unexpected characters
        console.log("Raw Command:", rawCommand);
        console.log("Processed Command:", lowerCommands);

        handlecommands(lowerCommands);
    };


    recognition.onerror = (e) => {
        console.error("Speech Recognition Error:", e);
    };
    
})
