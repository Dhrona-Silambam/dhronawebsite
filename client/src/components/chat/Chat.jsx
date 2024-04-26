import React from 'react';
import ChatBot from 'react-simple-chatbot';
import './chat.css'; // Import CSS file for styling

const Chat = () => {
  return (
    <div className="chat-container">
      <div className="chatbot-wrapper">
        <ChatBot
          steps={[
            {
              id: '1',
              message: 'Hi there! How can I assist you today?',
              trigger: '5',
            },
            {
              id: '5',
              options: [
                { value: 1, label: 'Timings of classes', trigger: 'timings' },
                { value: 2, label: 'Enrollment process', trigger: 'enrollment' },
                { value: 3, label: 'Instructors information', trigger: 'instructors' },
                { value: 4, label: 'Types of silambam techniques', trigger: 'techniques' },
                { value: 5, label: 'Trial class availability', trigger: 'trial' },
                { value: 6, label: 'Age restrictions', trigger: 'age' },
                { value: 7, label: 'Proficiency levels', trigger: 'proficiency' },
                { value: 8, label: 'Attire for classes', trigger: 'attire' },
                { value: 9, label: 'Equipment required', trigger: 'equipment' },
                { value: 'exit', label: 'Exit', trigger: 'exit' }, // Add exit option
              ],
            },
            {
              id: 'timings',
              message: 'The timings of the classes are Monday to Friday from 5:00 PM to 8:00 PM.',
              trigger:'5'
            },
            {
              id: 'enrollment',
              message: 'To enroll in classes, please visit our website or contact us directly.',
              trigger:'5'
            },
            {
              id: 'instructors',
              message: 'We have experienced instructors who are experts in silambam.',
              trigger:'5'
            },
            {
              id: 'techniques',
              message: 'We teach a variety of silambam techniques including basic strikes, blocks, and footwork.',
              trigger:'5'
            },
            {
              id: 'trial',
              message: 'Yes, we offer a trial class for new students. Please contact us to schedule one.',
              trigger:'5'
            },
            {
              id: 'age',
              message: 'There are no age restrictions for joining our classes.',
              trigger:'5'
            },
            {
              id: 'proficiency',
              message: 'We offer beginner, intermediate, and advanced levels of proficiency in silambam.',
              trigger:'5'
            },
            {
              id: 'attire',
              message: 'You should wear comfortable athletic clothing to the classes.',
              trigger:'5'
            },
            {
              id: 'equipment',
              message: 'We provide all necessary equipment for silambam practice.',
              trigger:'5'
            },
            {
              id: 'exit',
              message: 'Thank you for chatting with us. Have a great day!',
              end: true,
            },
          ]}
          // floating={true}
        />
      </div>
    </div>
  );
};

export default Chat;
