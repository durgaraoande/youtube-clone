export function getRandomMessage() {
    const messages = [
        "Hello, world!",
        "This is a random message.",
        "Lorem ipsum dolor sit amet.",
        "Programming is fun!",
        "Stay curious and keep coding.",
        "Randomness is the spice of life.",
        "Code like there's no tomorrow.",
        "Keep calm and debug on.",
        "May the code be with you.",
        "Happy coding!",
        "Keep learning and never stop coding.",
        "Success is the sum of small efforts.",
        "Code is poetry.",
        "Stay positive and keep coding.",
        "Embrace the challenges of coding.",
        "Think outside the box.",
        "Practice makes perfect.",
        "Stay focused and keep coding.",
        "Believe in the power of code.",
        "Challenge yourself and keep coding."
    ];

    const randomIndex = Math.floor(Math.random() * messages.length);
    return messages[randomIndex];
}