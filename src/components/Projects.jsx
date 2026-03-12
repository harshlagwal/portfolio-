import React from 'react';
import { motion } from 'framer-motion';
import { Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "WanderLust.ai",
      description: [
        "🌍 AI Travel Planner – Discover, plan, and organize trips with intelligent itineraries",
        "🗺️ Smart Itinerary Generation – Powered by Google Gemini AI, tailored to preferences, budget, and duration",
        "💾 Trip Management – Save, revisit, and share travel plans with ease",
        "🎨 Modern UI/UX – Interactive maps, responsive design, immersive visuals",
        "👥 Admin Dashboard – Manage users, itineraries, and search analytics"
      ],
      tech: ["Node.js", "Express", "MongoDB", "React", "TypeScript", "Tailwind CSS", "Firebase", "Gemini AI"],
      github: "https://github.com/harshlagwal/WanderLust.ai"
    },
    {
      title: "Healthcare Assistant Chatbot",
      subtitle: "Developed during AI Transformative Learning Internship (Edunet Foundation)",
      description: [
        "AI-powered healthcare chatbot for symptom analysis and medical guidance",
        "Uses Natural Language Processing to understand user queries",
        "Provides basic health advice and symptom suggestions",
        "Interactive chatbot interface for user-friendly healthcare support"
      ],
      tech: ["Python", "Streamlit", "TensorFlow", "PyTorch", "NLTK"],
      github: "https://github.com"
    },
    {
      title: "Object Detection System",
      description: [
        "Deep Learning & Computer Vision project for object detection",
        "Uses OpenCV’s DNN module with SSD MobileNet v3 trained on COCO dataset",
        "Detects objects in images, videos, and live webcam streams",
        "Draws bounding boxes with class labels for detected objects",
        "Demonstrates real-time detection capabilities"
      ],
      tech: ["Python", "OpenCV", "TensorFlow", "Matplotlib"],
      github: "https://github.com/harshlagwal/Object-Detection"
    },
    {
      title: "Safalta Apki Chatbot",
      description: [
        "Career Guidance Chatbot built with Python and Streamlit",
        "User registration system to capture education, interests, and career goals",
        "Generates personalized career roadmaps",
        "AI chat support powered by DeepSeek API",
        "SQLite database used to store user information"
      ],
      tech: ["Python", "Streamlit", "SQLite", "DeepSeek API"],
      github: "https://github.com/harshlagwal/Safalta--Apki-Chatbot"
    },
    {
      title: "Employee Salary Prediction",
      description: [
        "End-to-End machine learning solution for salary prediction",
        "Data preprocessing: handling missing values, encoding categorical data, removing outliers",
        "Compares multiple ML models including Random Forest, Logistic Regression, SVM, KNN, and Gradient Boosting",
        "Streamlit web application for predictions and batch CSV uploads",
        "Uses Adult Income dataset with demographic and work-related features"
      ],
      tech: ["Python", "Scikit-learn", "Streamlit", "Pandas", "NumPy"],
      github: "https://github.com/harshlagwal/Employee-Salary-Prediction"
    },
    {
      title: "AlgoFlow VS Code Extension",
      description: [
        "Educational VS Code extension to visualize algorithms using flowcharts",
        "Converts code into interactive animated flowcharts instantly",
        "Step-by-step execution with variable tracking",
        "Loop visualization to show iteration flow",
        "Automatic Big-O complexity analysis",
        "Supports Python, Java, C, C++, JavaScript, TypeScript, and R"
      ],
      tech: ["JavaScript", "VS Code API", "Algorithms", "Flowchart Visualization"],
      github: "https://github.com/harshlagwal/AlgoFlow-"
    }
  ];

  return (
    <section id="projects" className="py-16 md:py-20 bg-white dark:bg-[#0b0f1a] transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
          <div>
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-semibold mb-5 font-display tracking-tight text-gray-900 dark:text-white transition-colors duration-500"
            >
              Projects
            </motion.h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-xl font-sans leading-relaxed transition-colors duration-500">
              Real-world AI, Machine Learning, and Software projects demonstrating practical problem solving and engineering skills.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden hover:border-vibrant-blue/30 transition-all duration-500 flex flex-col shadow-sm hover:shadow-md hover:-translate-y-[6px] p-8"
            >
              <div className="flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-vibrant-blue transition-colors font-display tracking-tight text-gray-900 dark:text-white duration-500">
                    {project.title}
                  </h3>
                  
                  {project.subtitle && (
                    <p className="text-vibrant-blue text-sm font-semibold mb-6 italic tracking-tight opacity-90">
                      {project.subtitle}
                    </p>
                  )}

                  {!project.subtitle && <div className="h-6"></div>}

                  <ul className="text-gray-600 dark:text-gray-400 text-sm mb-8 font-sans leading-relaxed transition-colors duration-500 space-y-2 list-disc pl-4">
                    {project.description.map((bullet, i) => (
                      <li key={i}>{bullet}</li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map((t, i) => (
                      <span key={i} className="text-xs px-3 py-1 bg-white dark:bg-[#0b0f1a] rounded-md border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-mono font-medium tracking-wide shadow-sm transition-colors duration-500">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center">
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-2.5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg font-semibold hover:scale-105 hover:shadow-lg transition-all duration-300"
                  >
                    <Github size={18} /> View on GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
