import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';  // Import useNavigate

export const Dashboard = () => {
    const [flashcards, setFlashcards] = useState([
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
    ]);
    const [newFlashcard, setNewFlashcard] = useState({ question: '', answer: '' });
    const [editingFlashcard, setEditingFlashcard] = useState(null);

    const navigate = useNavigate();  // Initialize useNavigate

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewFlashcard({ ...newFlashcard, [name]: value });
    };

    const addFlashcard = () => {
        if (newFlashcard.question && newFlashcard.answer) {
            setFlashcards([...flashcards, { ...newFlashcard, id: flashcards.length + 1 }]);
            setNewFlashcard({ question: '', answer: '' });
            toast.success("Flashcard Added Successfully")
        } else {
            toast.warning("All fields are Required!")
        }
    };

    const startEditing = (flashcard) => {
        setEditingFlashcard(flashcard);
    };

    const saveEdit = () => {
        setFlashcards(flashcards.map((fc) => (fc.id === editingFlashcard.id ? editingFlashcard : fc)));
        setEditingFlashcard(null);
        toast.success("Flashcard Updated Successfully")
    };

    const deleteFlashcard = (id) => {
        setFlashcards(flashcards.filter((fc) => fc.id !== id));
        toast.success("Flashcard Deleted Successfully")
    };

    return (
        <div className="min-h-screen bg-gray-900 text-white p-8">
            <h1 className="text-4xl font-bold mb-8">Flashcard Dashboard</h1>

            {/* Back Button */}
            <button
                onClick={() => navigate('./FlashCard')}  // Navigate to the Flashcard page
                className="px-4 py-2 mb-8 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg"
            >
                Back to Flashcards
            </button>

            {/* Add Flashcard */}
            <div className="mb-8 p-6 bg-gray-800 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold mb-4">Add New Flashcard</h2>
                <div className="mb-4">
                    <input
                        type="text"
                        name="question"
                        placeholder="Question"
                        value={newFlashcard.question}
                        onChange={handleInputChange}
                        className="w-full p-3 bg-gray-700 rounded-lg"
                    />
                </div>
                <div className="mb-4">
                    <input
                        type="text"
                        name="answer"
                        placeholder="Answer"
                        value={newFlashcard.answer}
                        onChange={handleInputChange}
                        className="w-full p-3 bg-gray-700 rounded-lg"
                    />
                </div>
                <button
                    onClick={addFlashcard}
                    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg"
                >
                    Add Flashcard
                </button>
            </div>

            {/* Edit Flashcard */}
            {editingFlashcard && (
                <div className="mb-8 p-6 bg-gray-800 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-semibold mb-4">Edit Flashcard</h2>
                    <div className="mb-4">
                        <input
                            type="text"
                            name="question"
                            placeholder="Question"
                            value={editingFlashcard.question}
                            onChange={(e) =>
                                setEditingFlashcard({ ...editingFlashcard, question: e.target.value })
                            }
                            className="w-full p-2 bg-gray-700 rounded-lg"
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            type="text"
                            name="answer"
                            placeholder="Answer"
                            value={editingFlashcard.answer}
                            onChange={(e) =>
                                setEditingFlashcard({ ...editingFlashcard, answer: e.target.value })
                            }
                            className="w-full p-2 bg-gray-700 rounded-lg"
                        />
                    </div>
                    <button
                        onClick={saveEdit}
                        className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg"
                    >
                        Save Changes
                    </button>
                </div>
            )}

            {/* Display Flashcards */}
            <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Your Flashcards</h2>
                <ul className="space-y-4">
                    {flashcards.map((flashcard) => (
                        <li
                            key={flashcard.id}
                            className="p-4 bg-gray-800 rounded-lg shadow-lg flex justify-between items-center"
                        >
                            <div>
                                <p className="text-lg font-bold">{flashcard.question}</p>
                                <p className="text-sm">{flashcard.answer}</p>
                            </div>
                            <div className="flex space-x-4">
                                <button
                                    onClick={() => startEditing(flashcard)}
                                    className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 rounded-lg"
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => deleteFlashcard(flashcard.id)}
                                    className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded-lg"
                                >
                                    Delete
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
