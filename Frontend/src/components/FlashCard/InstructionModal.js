import React from 'react';
import Modal from 'react-modal';
import { FaTimes } from 'react-icons/fa';

// Ensure you call Modal.setAppElement() to prevent accessibility issues
Modal.setAppElement('#root');

const InstructionModal = ({ isOpen, onRequestClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Instructions"
      className="fixed inset-0 flex items-center justify-center p-4"
      overlayClassName="fixed inset-0 bg-gray-800 bg-opacity-70"
    >
      <div className="relative bg-white p-6 rounded-lg shadow-lg max-w-md w-full h-[90%] overflow-y-auto">
        <button
          className="absolute top-3 right-3 text-gray-700 hover:text-gray-900"
          onClick={onRequestClose}
        >
          <FaTimes className="text-2xl" />
        </button>
        <h2 className="text-2xl font-bold mb-6 text-blue-600 flex items-center">
          📝 How to Use the Flashcard App
        </h2>
        <p className="mb-4 text-gray-700">
          Welcome to the Flashcard App! Here are some key features and tips to get you started:
        </p>
        <div className="bg-blue-100 p-4 rounded-lg shadow-inner mb-4">
          <h3 className="text-lg font-semibold text-blue-800 mb-2 flex items-center">
            🎯 Features:
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-800">
            <li><strong>View Flashcards:</strong> Browse through flashcards and test your knowledge.</li>
            <li><strong>Add Flashcards:</strong> Create new flashcards with questions and answers.</li>
            <li><strong>Edit Flashcards:</strong> Update existing flashcards as needed.</li>
            <li><strong>Delete Flashcards:</strong> Remove flashcards that are no longer useful.</li>
            <li><strong>Timer Feature:</strong> When in Test Mode, a timer will count down to challenge your recall speed.</li>
            <li><strong>Reset Feature:</strong> Reset the flashcards and timer to start from the beginning.</li>
            <li><strong>Scoreboard Feature:</strong> View a summary of how many times each flashcard was clicked during Test Mode.</li>
            <li><strong>Dashboard:</strong> Navigate to the Dashboard to access additional functionalities and settings.</li>
            <li><strong>Number of Clicks:</strong> Track the number of times each flashcard was viewed or clicked in Test Mode.</li>
          </ul>
        </div>
        <div className="bg-green-100 p-4 rounded-lg shadow-inner">
          <h3 className="text-lg font-semibold text-green-800 mb-2 flex items-center">
            💡 Tips for Effective Learning:
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-800">
            <li><strong>Regular Review:</strong> Regularly review flashcards to reinforce your memory.</li>
            <li><strong>Use Test Mode:</strong> Challenge yourself with the test mode for better recall.</li>
            <li><strong>Keep It Short:</strong> Use concise questions and answers for better retention.</li>
            <li><strong>Organize Flashcards:</strong> Categorize flashcards by topic for targeted learning.</li>
          </ul>
        </div>
      </div>
    </Modal>
  );
};

export default InstructionModal;
