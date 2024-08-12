import React, { useState, useEffect } from 'react';
import Flashcard from './Flashcard';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import InstructionModal from './InstructionModal'; // Import the InstructionModal component
import 'react-toastify/dist/ReactToastify.css';

export const FlashcardPage = () => {
    const navigate = useNavigate();
    const sampleFlashcards = [
        { id: 1, question: 'What is the time complexity of accessing an element in a hash table?', answer: 'O(1) on average, O(n) in the worst case' },
        { id: 2, question: 'Explain the difference between a binary tree and a binary search tree.', answer: 'A binary tree is a tree data structure where each node has at most two children. A binary search tree (BST) is a binary tree where for each node, the left subtree has values less than the node and the right subtree has values greater than the node.' },
        { id: 3, question: 'What is the time complexity of inserting an element into a balanced binary search tree?', answer: 'O(log n)' },
        // DSA Questions
        { id: 4, question: 'What is the time complexity of inserting an element into a balanced binary search tree?', answer: 'O(log n)' },
        { id: 5, question: 'Explain the difference between a stack and a queue.', answer: 'A stack follows Last In First Out (LIFO) principle, while a queue follows First In First Out (FIFO) principle.' },
        { id: 6, question: 'What is the worst-case time complexity of Quick Sort?', answer: 'O(n^2)' },
        { id: 7, question: 'What is the space complexity of Merge Sort?', answer: 'O(n)' },
        { id: 8, question: 'Describe the difference between Depth-First Search (DFS) and Breadth-First Search (BFS).', answer: 'DFS explores as far as possible along each branch before backtracking, while BFS explores all nodes at the present depth level before moving on to nodes at the next depth level.' },
        { id: 9, question: 'What is a hash table and how does it handle collisions?', answer: 'A hash table stores key-value pairs and uses a hash function to compute the index for storing values. Collisions are handled using techniques like chaining or open addressing.' },
        { id: 10, question: 'What is the purpose of the “visited” array in graph algorithms?', answer: 'It keeps track of whether a node has been visited to prevent revisiting and infinite loops during traversal.' },
        { id: 11, question: 'What is the main advantage of using a heap over a balanced binary search tree?', answer: 'Heaps are optimized for retrieving the minimum or maximum element quickly, while balanced BSTs are optimized for efficient searching, insertion, and deletion.' },
        { id: 12, question: 'What is a topological sort and when is it used?', answer: 'Topological sort is a linear ordering of vertices in a directed acyclic graph (DAG) such that for every directed edge u → v, vertex u comes before v in the ordering. It is used in scheduling tasks or resolving dependencies.' },
        { id: 13, question: 'Explain the concept of “divide and conquer” with an example.', answer: 'Divide and conquer is an algorithm design paradigm that solves a problem by recursively dividing it into smaller subproblems, solving each subproblem independently, and then combining their solutions. Example: Merge Sort.' },
        { id: 14, question: 'How does the “Knapsack Problem” work and what are its variations?', answer: 'The Knapsack Problem is a combinatorial optimization problem where the goal is to determine the most valuable combination of items to include in a knapsack without exceeding its capacity. Variations include 0/1 Knapsack, Fractional Knapsack, and Multiple Knapsack.' },
        { id: 15, question: 'What is the difference between a Min-Heap and a Max-Heap?', answer: 'In a Min-Heap, the parent node is always less than or equal to its child nodes, while in a Max-Heap, the parent node is always greater than or equal to its child nodes.' },
        { id: 16, question: 'What is the primary use of a Trie data structure?', answer: 'A Trie (or prefix tree) is used to store a dynamic set of strings and allows for efficient retrieval of keys by prefix. It is commonly used in autocomplete and spell-checking applications.' },
        { id: 17, question: 'How do you implement a priority queue?', answer: 'A priority queue can be implemented using a binary heap, where elements are stored with an associated priority, and the queue ensures that the element with the highest priority is dequeued first.' },
        { id: 18, question: 'Explain the concept of “dynamic programming” and give an example.', answer: 'Dynamic programming is an optimization technique used to solve problems by breaking them down into simpler subproblems and storing the results of these subproblems to avoid redundant computations. Example: Fibonacci sequence.' },
        { id: 19, question: 'What is the significance of “backtracking” in algorithm design?', answer: 'Backtracking is a technique for solving constraint satisfaction problems by incrementally building candidates for solutions and abandoning them as soon as it is determined that they cannot be extended to a valid solution.' },
        { id: 20, question: 'How does a Bloom filter work and what is its primary use?', answer: 'A Bloom filter is a probabilistic data structure used to test whether an element is a member of a set. It provides a compact representation and allows for fast membership queries with a possibility of false positives.' },
    ];
    
    const [flashcards] = useState(sampleFlashcards);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isFlipped, setIsFlipped] = useState(false);
    const [isTestMode, setIsTestMode] = useState(false);
    const [timer, setTimer] = useState(10);
    const [clicks, setClicks] = useState(Array(sampleFlashcards.length).fill(0));
    const [isTestEnded, setIsTestEnded] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(true); // State for modal visibility

    

    const handleNext = () => {
        if (isTestMode) {
            setClicks(clicks.map((count, index) => (index === currentIndex ? count + 1 : count)));
        }
        setIsFlipped(false);
        setCurrentIndex((currentIndex + 1) % flashcards.length);
        setTimer(10);
    };

    const handlePrevious = () => {
        if (isTestMode) {
            setClicks(clicks.map((count, index) => (index === currentIndex ? count + 1 : count)));
        }
        setIsFlipped(false);
        setCurrentIndex((currentIndex - 1 + flashcards.length) % flashcards.length);
        setTimer(10);
    };

    const handleReset = () => {
        setIsFlipped(false);
        setCurrentIndex(0);
        setTimer(10);
        setIsTestEnded(false);
    };

    const startTestMode = () => {
        setIsTestMode(true);
        setTimer(10);
        setIsTestEnded(false);
        toast.info('Test mode is started! Timer will start now.');
    };

    const stopTestMode = () => {
        setIsTestMode(false);
        setTimer(10); // Reset the timer when test mode is stopped
        setIsTestEnded(true); // Show the scoreboard when test mode ends
    };

    useEffect(() => {
        let countdown;
        if (isTestMode && timer > 0) {
            countdown = setTimeout(() => setTimer(timer - 1), 1000);
        } else if (isTestMode && timer === 0) {
            handleNext();
        }
        return () => clearTimeout(countdown);
    }, [timer, isTestMode]);

    return (
        <div className="flex flex-col min-h-screen bg-gray-900 text-white relative">
            <ToastContainer />
            <InstructionModal isOpen={isModalOpen} onRequestClose={() => setIsModalOpen(false)} />
            <header className="bg-yellow-500 p-4 flex justify-between items-center">
                <div className="text-4xl font-bold">
                    Flashcard Viewer
                </div>
                <div className="flex space-x-4">
                    <button
                        onClick={() => navigate('/dashboard')}
                        className="px-6 py-2 text-white bg-green-500 rounded-lg shadow hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
                    >
                        Go to Dashboard
                    </button>
                    <button
                        onClick={handleReset}
                        className="px-6 py-2 text-white bg-red-500 rounded-lg shadow hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
                    >
                        Reset
                    </button>
                    {!isTestMode && (
                        <button
                            onClick={startTestMode}
                            className="px-6 py-2 text-white bg-blue-500 rounded-lg shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        >
                            Start Test Mode
                        </button>
                    )}
                    {isTestMode && (
                        <button
                            onClick={stopTestMode}
                            className="px-6 py-2 text-white bg-yellow-500 rounded-lg shadow hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                        >
                            Stop Test Mode
                        </button>
                    )}
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="px-6 py-2 text-white bg-purple-500 rounded-lg shadow hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-400"
                    >
                        Instructions
                    </button>
                </div>
            </header>
            <main className="flex flex-col items-center justify-center flex-grow p-4">
                {isTestEnded ? (
                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                        <h2 className="text-3xl font-bold mb-4">Scoreboard</h2>
                        <ul>
                            {flashcards.map((flashcard, index) => (
                                <li key={flashcard.id} className="mb-2">
                                    <div className="text-lg font-medium">{flashcard.question}</div>
                                    <div className="text-sm text-gray-400">Clicks: {clicks[index]}</div>
                                </li>
                            ))}
                        </ul>
                    </div>
                ) : (
                    <div className="mb-8">
                        {flashcards.length > 0 && (
                            <Flashcard
                                flashcard={flashcards[currentIndex]}
                                isFlipped={isFlipped}
                                setIsFlipped={setIsFlipped}
                            />
                        )}
                    </div>
                )}
                {isTestMode && !isTestEnded && (
                    <div className="text-2xl font-bold mb-4">
                        Time left: {timer} seconds
                    </div>
                )}
                <div className="flex items-center space-x-4 mb-8">
                    <button
                        onClick={handlePrevious}
                        aria-label="Previous flashcard"
                        disabled={currentIndex === 0 || isTestMode}
                        className={`px-6 py-2 text-white bg-indigo-500 rounded-lg shadow hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-400 ${currentIndex === 0 || isTestMode ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                        Previous
                    </button>
                    <span className="text-lg">
                        {currentIndex + 1} / {flashcards.length}
                    </span>
                    <button
                        onClick={handleNext}
                        aria-label="Next flashcard"
                        disabled={currentIndex === flashcards.length - 1 || isTestMode}
                        className={`px-6 py-2 text-white bg-indigo-500 rounded-lg shadow hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-400 ${currentIndex === flashcards.length - 1 || isTestMode ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                        Next
                    </button>
                </div>
            </main>
            <footer className="bg-gray-800 p-4 text-center text-gray-400">
                <div className="text-sm">
                    <p>Made by <a href="https://www.linkedin.com/in/anujmishra05/" className="text-purple-500 hover:underline" target="_blank" rel="noopener noreferrer">Anuj Mishra</a></p>
                    <p>
                        Connect with me: 
                        <a href="https://professional-portfolio-plum.vercel.app/" className="text-purple-500 hover:underline ml-2" target="_blank" rel="noopener noreferrer">Portfolio</a>
                        <a href="https://www.linkedin.com/in/anujmishra05/" className="text-blue-400 hover:underline ml-2" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        <a href="https://github.com/Anujmishra2005" className="text-green-400 hover:underline ml-2" target="_blank" rel="noopener noreferrer">Github</a>
                        <a href="https://www.instagram.com/anuj_mishra_05/" className="text-pink-400 hover:underline ml-2" target="_blank" rel="noopener noreferrer">Instagram</a> | 
                        
                    </p>
                    <p className="mt-2">All rights reserved to Anuj Mishra</p>
                </div>
            </footer>
        </div>
    );
};
