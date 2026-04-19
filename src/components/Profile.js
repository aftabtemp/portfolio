import React from 'react';
import 'tailwindcss/tailwind.css';

const Profile = () => {
    const handleDownloadResume = () => {
        const resumeUrl = 'https://drive.google.com/file/d/1N0IoSGoR7VMNM0PBHJPSI-hbkplftzPo/view?usp=sharing';
        window.open(resumeUrl, '_blank');
    };
    return (
        <section id="profile" className="bg-gray-900 text-gray-200 min-h-screen flex flex-col justify-center items-center">
            <div className="relative z-10 text-center">
                <h2 className="text-5xl font-extrabold text-white mb-4 animate-fade-in">Aftab Alam</h2>
                <p className="text-2xl font-mono text-white animate-fade-in">Software Developer</p>
                <p className="text-lg mt-6 leading-relaxed text-white max-w-prose">
                    Motivated and enthusiastic individual with a passion for Software Development. Eager to leverage my skills and knowledge to contribute effectively to an organization, while embracing a culture of continuous learning and improvement.
                </p>
                <div className="flex justify-center mb-8">
                        <a
                            href="https://www.linkedin.com/in/aftabalam0"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-3xl mr-4"
                        >
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a
                            href="https://github.com/aftabalam0/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-3xl"
                        >
                            <i className="fab fa-github"></i>
                        </a>
                    </div>
                <button
                    className="bg-blue-500 mt-1 hover:bg-blue-600 text-white py-3 px-6 rounded-lg shadow-lg transition duration-300"
                    onClick={handleDownloadResume}>
                            Download Resume
                        </button>
            </div>
        </section>
    );
}

export default Profile;
