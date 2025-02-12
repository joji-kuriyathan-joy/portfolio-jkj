//information for the Project Component

export const projectList = [
    {
        id: crypto.randomUUID(),
        title: "DataForte",
        description: "A comperhensive database backup & recovery system.",
        year: "2023",
        link: "https://afterdarkcreation.pythonanywhere.com/",
        btnName: "Website",
    },
    {
        id: crypto.randomUUID(),
        title: "NHS Family Invoice App",
        description:
            "A mobile application that digitalizes the Family Voice - Carers Diary forms.",
        year: "2023",
        link: "https://github.com/joji-kuriyathan-joy/Nhs-Family-Invoice",
        btnName: "GitHub",
    },
    {
        id: crypto.randomUUID(),
        title: "Body Performance",
        description:
            "Multi-class body performance classification appraising machine learning techniques.",
        year: "2022",
        link: "https://github.com/joji-kuriyathan-joy/BODY_PERFORMANCE",
        btnName: "GitHub",
    },
];

//information for the About Component
export const profileBuilder = [
    {
        infoId: "sayHello",
        infoText: "Hi ✋, I'm Joji Kuriyathan Joy ",
    },
    {
        infoId: "passion",
        infoText:
            "I transform my ideas into experiences and bringing them to life online.",
    },
];

// information for the Experience Component
export const experienceList = [
    {
        id: crypto.randomUUID(),
        company: "Layers Studio",
        title: "Full-stack Developer · Internship",
        duration: "Nov 2024 - Dec 2024",
    },
    {
        id: crypto.randomUUID(),
        company: "Teesside University",
        title: "Internship · NHS",
        duration: "Jan 2023 - May 2023",
    },
    {
        id: crypto.randomUUID(),
        company: "Marvenics",
        title: "Application Developer · Part-time",
        duration: "Jan 2022 - Sep 2023",
    },
    {
        id: crypto.randomUUID(),
        company: "Cygnus Software, Inc",
        title: "Software Developer · Full-time",
        duration: "Jun 2019 - Oct 2021",
    },
];

// information for the Skill Component
export const techStackList = [
    {
        frontend: [
            {
                name: "HTML5",
                logo: "https://img.icons8.com/?size=100&id=20909&format=png&color=000000",
            },
            {
                name: "CSS3",
                logo: "https://img.icons8.com/?size=100&id=7gdY5qNXaKC0&format=png&color=000000",
            },
            {
                name: "JavaScript",
                logo: "https://img.icons8.com/?size=100&id=108784&format=png&color=000000",
            },
            {
                name: "Bootstrap",
                logo: "https://img.icons8.com/?size=100&id=EzPCiQUqWWEa&format=png&color=000000",
            },
        ],
    },
    {
        backend: [
            {
                name: "Java",
                logo: "https://img.icons8.com/?size=100&id=FRRACRKRsw2s&format=png&color=000000",
            },
            {
                name: "Python",
                logo: "https://img.icons8.com/?size=100&id=13441&format=png&color=000000",
            },
            {
                name: "C#",
                logo: "https://img.icons8.com/?size=100&id=Fycm8TUhWmFU&format=png&color=000000",
            },
        ],
    },
    {
        framework: [
            {
                name: "Flask",
                logo: "https://img.icons8.com/?size=100&id=MHcMYTljfKOr&format=png&color=000000",
            },
            {
                name: "Django",
                logo: "https://img.icons8.com/?size=100&id=XPdRFanRZtNK&format=png&color=000000",
            },
            {
                name: "React",
                logo: "https://img.icons8.com/?size=100&id=Nlsua06Gvxel&format=png&color=000000",
            },
            {
                name: "Spring Boot",
                logo: "https://img.icons8.com/?size=100&id=90519&format=png&color=000000",
            },
        ],
    },
    {
        database: [
            {
                name: "PostgreSQL",
                logo: "https://img.icons8.com/?size=100&id=38561&format=png&color=000000",
            },
            {
                name: "MongoDB",
                logo: "https://img.icons8.com/?size=100&id=bosfpvRzNOG8&format=png&color=000000",
            },
            {
                name: "Firebase",
                logo: "https://img.icons8.com/?size=100&id=62452&format=png&color=000000",
            },
            {
                name: "MySQL",
                logo: "https://img.icons8.com/?size=100&id=UFXRpPFebwa2&format=png&color=000000",
            },
            {
                name: "Vertica",
                logo: "https://logotyp.us/file/vertica.svg",
            },
        ],
    },
    {
        testing: [
            {
                name: "Selenium",
                logo: "https://img.icons8.com/?size=100&id=38553&format=png&color=000000",
            },
            {
                name: "Postman",
                logo: "https://w7.pngwing.com/pngs/509/390/png-transparent-postman-macos-bigsur-icon-thumbnail.png",
            },
            {
                name: "Apache JMeter",
                logo: "https://images.seeklogo.com/logo-png/38/1/jmeter-logo-png_seeklogo-388141.png",
            },
        ],
    },
    {
        version_control: [
            {
                name: "Git",
                logo: "https://img.icons8.com/?size=100&id=20906&format=png&color=000000",
            },
            {
                name: "GitHub",
                logo: "https://img.icons8.com/?size=100&id=dQUAwwnconR8&format=png&color=000000",
            },
        ],
    },
    {
        cloud_technologies: [
            {
                name: "AWS",
                logo: "https://img.icons8.com/?size=100&id=33039&format=png&color=000000",
            },
            {
                name: "GCP",
                logo: "https://img.icons8.com/?size=100&id=20774&format=png&color=000000",
            },
        ],
    },
];

// infomation regaring projects in detail
let dataForteCodeSnip = `
    from googleapiclient.discovery import build
    from googleapiclient.http import MediaFileUpload

    def upload_to_google_drive(service, file_path, file_name, mime_type='application/octet-stream'):
        folder_id = find_or_create_folder(service, 'AI_Backups')
        file_metadata = { 'name': file_name, 'parents': [folder_id] }
        media = MediaFileUpload(file_path, mimetype=mime_type)
        file = service.files().create(body=file_metadata, media_body=media, fields='id').execute()
        return file.get('id')
`;
let nhsCodeSnip = `
private void registerUser(String email, String password) {
              FirebaseAuth auth = FirebaseAuth.getInstance();
              auth.createUserWithEmailAndPassword(email, password)
                  .addOnCompleteListener(task -> {
                      if (task.isSuccessful()) {
                          Log.d("Register", "User successfully registered");
                      } else {
                          Log.e("Register", "Registration failed", task.getException());
                      }
                  });
          }`;
export const projectsData = [
    {
        id: crypto.randomUUID(),
        title: "AI-Enhanced Database Backup and Recovery Web-app",
        description:
            "A next-generation web application that leverages artificial intelligence to revolutionize database backup and recovery processes. With predictive analytics, automated recovery, and intelligent storage optimization, this app ensures minimal downtime and maximum data security.",
        subheading: "Reinventing Database Backup and Recovery with AI",
        technologies: [
            "Python",
            "Flask",
            "Firebase",
            "Google Drive API",
            "PostgreSQL",
            "MySQL",
            "Machine Learning",
            "Cloud Storage",
            "Docker",
        ],
        projectStructure: {
            frontend: "Jinja Templates, Bootstrap, JavaScript",
            backend: "Flask (Python), Firebase Authentication, AI Model Integration",
            database: "MySQL & PostgreSQL with automated cloud backups",
            "AI Integration":
                "Machine Learning for anomaly detection & backup scheduling",
        },
        projectScope:
            "The project aims to replace **traditional backup and recovery solutions** by introducing an AI-driven automation system that not only detects failures before they happen but also optimizes backup strategies dynamically based on real-time database usage.",
        keyFeatures: [
            "🚀 **AI-Powered Backup Automation** - Uses machine learning to predict optimal backup times, ensuring minimal impact on performance.",
            "🛡️ **Intelligent Data Recovery** - AI speeds up recovery by prioritizing critical data restoration.",
            "📊 **Predictive Analytics for Failures** - Detects anomalies in database performance to prevent downtime before it happens.",
            "🔒 **Cloud Integration** - Secure backup storage via Google Drive, OneDrive, and other cloud services.",
            "🖥️ **User-Friendly Dashboard** - Simple UI for configuring backup policies and monitoring database health.",
        ],
        importantCodeSnippet:
            "Google Drive API Integration for Secure Cloud Backup",
        codeSnippet: dataForteCodeSnip,

        projectChallenges: [
            "🔍 **Seamless AI Integration** - Making sure the AI model accurately predicts failure patterns.",
            "📦 **Data Security & Compliance** - Ensuring all backups are encrypted and GDPR-compliant.",
            "🔗 **Cloud Storage Performance** - Optimizing backup speeds while ensuring minimal cost.",
        ],
        solutionApproach: [
            "✅ **Iterative AI Training** - Continuously improving the ML model with real database activity data.",
            "✅ **Security-First Design** - Implemented encryption for stored backups and OAuth authentication for cloud APIs.",
            "✅ **Performance Testing** - Simulated high-traffic conditions to ensure stable and efficient database operations.",
        ],
        userExperience: {
            registration:
                "Users sign up and configure database connections securely.",
            dashboard: "Intuitive interface for scheduling and monitoring backups.",
            backupProcess:
                "AI suggests backup schedules, or users can manually configure.",
            recoveryProcess:
                "With one click, users can restore data from the most recent or historical backups.",
        },
        futureEnhancements: [
            "💡 **Advanced AI Training** - Improve failure detection models with larger datasets.",
            "🌐 **Multi-Cloud Support** - Add AWS S3 and Azure Storage as backup options.",
            "📲 **Mobile App Version** - Bring backup and recovery monitoring to mobile users.",
            "🔗 **Blockchain-Based Security** - Ensure immutability of backup data using blockchain.",
        ],
        impact:
            "This project is a **game-changer** in the field of **database management**. By reducing manual backup overhead, minimizing downtime, and ensuring robust security, it allows enterprises to focus on their operations while AI takes care of **data reliability**.",
        reference: "https://github.com/joji-kuriyathan-joy/DataForte",
        image: "/dataForte.png",
    },
    {
        id: crypto.randomUUID(),
        title: "NHS Family Voice – Carers Diary",
        description:
            "A mobile application that digitalizes the Family Voice - Carers Diary, a health tracking diary used by palliative care patients and their caregivers. The app enhances patient data collection, provides analytics, and offers health professionals valuable insights to improve patient care.",
        subheading: "Empowering Caregivers with Digital Health Tracking",
        technologies: [
            "Android Studio",
            "Java",
            "Firebase Authentication",
            "Firebase Realtime Database",
            "RecyclerView",
            "GitHub",
            "Jira",
            "Agile Scrum Framework",
        ],
        projectStructure: {
            frontend: "Android UI (XML), Material Design",
            backend:
                "Java (Android), Firebase Authentication, Firebase Realtime Database",
            database: "Firebase Realtime Database for secure patient data storage",
            authentication: "Email-password based authentication using Firebase",
            dataProcessing: "Analytics generated from patient survey data",
            agileDevelopment:
                "Developed using Scrum methodology with iterative sprints",
        },
        projectScope:
            "This project aims to replace traditional paper-based health diaries with a **secure, mobile-friendly application**. The app enables caregivers to record patient symptoms daily, visualize trends over time, and securely share insights with healthcare providers.",
        keyFeatures: [
            "📱 **User-Friendly Mobile App** - Designed with an intuitive UI for caregivers and health professionals.",
            "🔒 **Secure Authentication** - Uses Firebase Authentication for login and data protection.",
            "📊 **Patient Data Analytics** - Provides insights and summary reports of patient symptoms.",
            "📅 **Daily Health Tracking** - Allows caregivers to input daily responses about pain levels, medication intake, and other symptoms.",
            "💬 **Survey-Based Logging** - Uses a **5-star rating system** for tracking symptoms and daily health metrics.",
            "🚀 **Agile Development** - Built using **Scrum methodology** to ensure a structured and efficient development process.",
        ],
        importantCodeSnippet: "Firebase Authentication Implementation",
        codeSnippet: nhsCodeSnip,
        projectChallenges: [
            "🛡️ **Ensuring Data Security & GDPR Compliance** - Handling sensitive patient data securely within legal frameworks.",
            "📶 **Real-Time Syncing with Firebase** - Ensuring that patient logs sync accurately across devices.",
            "📲 **UI/UX Optimization for Caregivers** - Creating a design that is simple yet effective for elderly users.",
        ],
        solutionApproach: [
            "✅ **Implemented Firebase Authentication** for secure login and encrypted data storage.",
            "✅ **Developed a lightweight UI with Material Design** for seamless caregiver interactions.",
            "✅ **Used Agile Scrum** to structure the project into iterative sprints, allowing continuous improvement.",
        ],
        userExperience: {
            login:
                "Users can sign in using their registered email and password via Firebase Authentication.",
            registration:
                "New users must provide personal details and create an account before accessing the app.",
            profile:
                "Displays caregiver details and allows updates to profile information.",
            dailySurvey:
                "Users fill out a health survey with a **5-star rating system** for pain, medication, and food intake.",
            responseSummary:
                "Shows completed surveys with timestamps and caregiver details.",
            settings:
                "Allows users to adjust notification preferences and permissions.",
        },
        futureEnhancements: [
            "📍 **Location-Based Alerts** - Notify healthcare providers when critical symptoms are logged.",
            "🩺 **AI-Based Health Insights** - Predict potential health risks based on recorded data.",
            "📲 **iOS Version Development** - Expand the application beyond Android.",
            "🔄 **Integration with NHS Systems** - Enable seamless synchronization with existing NHS healthcare platforms.",
        ],
        impact:
            "This project bridges the gap between **caregivers and healthcare professionals** by transforming paper-based diaries into **a digital, AI-powered health tracking solution**. By providing **real-time insights and secure data storage**, it improves patient care and simplifies the tracking process for caregivers.",
        reference: "https://github.com/joji-kuriyathan-joy/Nhs-Family-Invoice",
        image: "/nhsApp.png",
    }, {
        id: crypto.randomUUID(),
        title: "Multi-Class Body Performance Classification Using Machine Learning",
        description: "A machine learning project aimed at classifying body performance into four grades (A: best, B: good, etc.) for individuals aged 20 to 60. The project utilizes various machine learning techniques to analyze and predict body performance based on features like age, gender, weight, heart rate, and more.",
        subheading: "Enhancing Health Awareness Through Machine Learning",
        technologies: [
            "Python",
            "Scikit-learn",
            "Pandas",
            "NumPy",
            "Matplotlib",
            "Seaborn",
            "TensorFlow",
            "Keras",
            "Jupyter Notebook"
        ],
        projectStructure: {
            "frontend": "Jupyter Notebook for data visualization and analysis",
            "backend": "Python (Scikit-learn, TensorFlow, Keras)",
            "database": "Kaggle dataset for body performance data",
            "dataProcessing": "Exploratory Data Analysis (EDA), Feature Scaling, Hyperparameter Tuning"
        },
        projectScope: "This project aims to build a **machine learning model** that can classify body performance into four grades based on various physical attributes. The model is designed to help individuals and healthcare providers understand and improve physical health by providing actionable insights.",
        keyFeatures: [
            "📊 **Exploratory Data Analysis (EDA)** - Visualized data distribution, correlation, and outliers using various plots.",
            "🤖 **Multiple Machine Learning Models** - Utilized Random Forest, Support Vector Machine, Decision Tree, and Artificial Neural Network for classification.",
            "🔧 **Feature Scaling & Hyperparameter Tuning** - Applied Standard Scaler and hyperparameter tuning to optimize model performance.",
            "📈 **Performance Metrics** - Evaluated models using accuracy score, precision, recall, and confusion matrix.",
            "📂 **Balanced Dataset** - Ensured the dataset was balanced with equal representation of each class."
        ],
        importantCodeSnippet: "Random Forest Classifier Implementation",
        codeSnippet: "from sklearn.ensemble import RandomForestClassifier\nmodel = RandomForestClassifier()\nmodel.fit(X_train, y_train)\npredictions = model.predict(X_test)",
        projectChallenges: [
            "📉 **Handling Outliers** - Managing outliers in features like height, weight, and body fat.",
            "🤔 **Model Selection** - Choosing the best-performing model among Random Forest, SVM, Decision Tree, and ANN.",
            "⚙️ **Hyperparameter Tuning** - Optimizing model parameters to avoid overfitting and underfitting."
        ],
        solutionApproach: [
            "✅ **Applied Feature Scaling** to normalize data and reduce the impact of outliers.",
            "✅ **Used Hyperparameter Tuning** to find the optimal parameters for each model.",
            "✅ **Selected Random Forest** as the best-performing model based on accuracy and other metrics."
        ],
        userExperience: {
            "dataInput": "Users can input physical attributes like age, gender, weight, and heart rate.",
            "modelPrediction": "The model predicts the body performance grade (A, B, C, D) based on the input data.",
            "resultsVisualization": "Results are visualized using confusion matrices and accuracy scores."
        },
        futureEnhancements: [
            "📍 **Integration with Wearable Devices** - Collect real-time data from fitness trackers and smartwatches.",
            "🩺 **Advanced Deep Learning Models** - Implement more complex neural networks for better accuracy.",
            "📲 **Mobile Application** - Develop a mobile app for easy access and real-time predictions.",
            "📊 **Enhanced Data Analytics** - Provide detailed health insights and recommendations based on body performance."
        ],
        impact: "This project provides a **data-driven approach** to understanding and improving body performance. By leveraging machine learning, it offers a **scalable solution** for individuals and healthcare providers to monitor and enhance physical health.",
        reference: "https://github.com/joji-kuriyathan-joy/BODY_PERFORMANCE",
        image: "/bodyPerf.png"
    },
    {
        id: crypto.randomUUID(),
        title: "Workplace Management System",
        description: "A full-stack workplace management system designed to streamline employee scheduling, timesheet management, and communication between users and admins. The system features user authentication, rota (schedule) management, timesheet tracking, and notifications.",
        subheading: "Simplifying Workplace Operations with React and Flask",
        technologies: [
            "React (Frontend)",
            "Flask (Backend)",
            "JavaScript",
            "Python",
            "React Router",
            "React Big Calendar",
            "Flask-JWT-Extended",
            "Flask-CORS",
            "Vite"
        ],
        projectStructure: {
            "frontend": "React (Vite) with components for user and admin interfaces",
            "backend": "Flask for API endpoints, authentication, and database interactions",
            "database": "JSON for database",
            "authentication": "JWT-based authentication for secure user and admin login",
            "dataProcessing": "Timesheet generation, rota management, and notifications",
            "agileDevelopment": "Developed using Scrum methodology with iterative development"
        },
        projectScope: "This project aims to **simplify workplace operations** by providing a centralized platform for **employee scheduling, timesheet management, and communication**. It includes features for both regular users and admins, ensuring efficient management of rotas, work hours, and notifications.",
        keyFeatures: [
            "🔐 **User Authentication** - Secure login and registration for users and admins.",
            "📅 **Rota Management** - Admins can create and edit weekly/monthly schedules, while users can view their rotas in weekly or monthly views.",
            "⏱️ **Timesheet Management** - Users can log daily work hours, and the system generates monthly summaries. Admins can approve or edit timesheets.",
            "📝 **Notes and Notifications** - Users can add notes to specific days, triggering notifications for admins.",
            "📊 **Dashboard** - Provides an overview of upcoming shifts, total hours worked, and notifications.",
            "📄 **Export Options** - Timesheets can be exported as PDF or Excel for reporting purposes."
        ],
        importantCodeSnippet: "Flask JWT Authentication Setup",
        codeSnippet: "from flask_jwt_extended import JWTManager, create_access_token\n\napp = Flask(__name__)\napp.config['JWT_SECRET_KEY'] = 'your-secret-key'\njwt = JWTManager(app)\n\n@app.route('/login', methods=['POST'])\ndef login():\n    # Authenticate user and return JWT token\n    access_token = create_access_token(identity=username)\n    return jsonify(access_token=access_token)",
        projectChallenges: [
            "🛠️ **Role-Based Access Control** - Implementing different views and functionalities for users and admins.",
            "📅 **Rota Scheduling** - Managing and displaying weekly/monthly schedules dynamically.",
            "⏱️ **Timesheet Validation** - Ensuring accurate logging and approval of work hours.",
            "🔐 **Secure Authentication** - Implementing JWT-based authentication for secure access."
        ],
        solutionApproach: [
            "✅ **Used React Router** for seamless navigation between user and admin views.",
            "✅ **Implemented React Big Calendar** for dynamic rota scheduling and visualization.",
            "✅ **Leveraged Flask-JWT-Extended** for secure authentication and role-based access.",
            "✅ **Developed modular components** for timesheet management and notifications."
        ],
        userExperience: {
            "login": "Users and admins can log in securely using JWT-based authentication.",
            "registration": "New users can register and gain access to the system.",
            "dashboard": "Provides an overview of upcoming shifts, total hours worked, and notifications.",
            "rota": "Users can view their schedules in weekly or monthly views, while admins can create and edit rotas.",
            "timesheet": "Users can log daily work hours and view monthly summaries. Admins can approve or edit timesheets.",
            "notifications": "Users can add notes to specific days, triggering notifications for admins.",
            "profile": "Users can update their profile information and change passwords."
        },
        futureEnhancements: [
            "📍 **Mobile App** - Develop a mobile version for easier access on the go.",
            "📊 **Advanced Analytics** - Provide insights into employee productivity and scheduling efficiency.",
            "🤖 **Automated Notifications** - Send reminders for upcoming shifts or pending timesheet approvals.",
            "🔄 **Integration with HR Systems** - Sync data with existing HR platforms for seamless operations."
        ],
        impact: "This project **streamlines workplace operations** by providing a centralized platform for scheduling, timesheet management, and communication. It enhances efficiency for both employees and admins, reducing manual effort and improving transparency.",
        reference: "https://github.com/joji-kuriyathan-joy/Workplace-Management",
        image: "/WPM.png"
    },
    {
        id: crypto.randomUUID(),
        title: "SQL Data Export Tool",
        description: "A Python-based tool designed to automate the extraction of data from SQL Server databases and export it to Excel or CSV files. The tool supports multiple queries, customizable output formats, and detailed logging for execution tracking.",
        subheading: "Streamlining Data Export from SQL Server to Excel/CSV",
        technologies: [
            "Python",
            "pyodbc",
            "Pandas",
            "OpenPyXL",
            "JSON",
            "SQL Server"
        ],
        projectStructure: {
            "frontend": "Command-line tool",
            "backend": "Python script for SQL query execution and data export",
            "database": "SQL Server for data storage and retrieval",
            "authentication": "SQL Server credentials for database access",
            "dataProcessing": "Data extraction, transformation, and export to Excel/CSV",
            "Development": "Script-based development"
        },
        projectScope: "This project aims to **automate the process of exporting data from SQL Server databases** to Excel or CSV files. It supports multiple SQL queries, customizable output formats (with or without headers), and detailed logging for execution tracking. The tool is designed to handle large datasets and provides flexibility in exporting data for reporting and analysis purposes.",
        keyFeatures: [
            "📊 **Multi-Query Support** - Executes multiple SQL queries and exports results to separate sheets (Excel) or files (CSV).",
            "📂 **Customizable Output** - Supports exporting data with or without column headers and allows customization of delimiters for CSV files.",
            "📝 **Detailed Logging** - Logs the execution process, including query execution times and errors, for easy debugging and tracking.",
            "📅 **Dynamic File Naming** - Generates output files with timestamps to ensure uniqueness and avoid overwriting.",
            "🔧 **Configurable via JSON** - Uses a JSON configuration file to specify SQL connection details, queries, output paths, and export settings.",
            "📄 **Excel and CSV Export** - Supports exporting data to both Excel (with multiple sheets) and CSV formats."
        ],
        importantCodeSnippet: "Exporting Data to Excel",
        codeSnippet: "def Export_to_Excel(connection, query_list, sheets_list, column_header_flag, output_file_name, output_file_path, log_file):\n    try:\n        workbook = Workbook()\n        for i, query in enumerate(query_list):\n            worksheet = workbook.create_sheet(sheets_list[i])\n            cursor = connection.cursor()\n            cursor.execute(query)\n            records = cursor.fetchall()\n            columns = [desc[0] for desc in cursor.description]\n            if column_header_flag == 'True':\n                for n, column in enumerate(columns, 0):\n                    worksheet.cell(row=1, column=n + 1).value = column\n            for n, row in enumerate(records, 1):\n                for i in range(len(columns)):\n                    worksheet.cell(row=n + 1, column=i + 1).value = row[i]\n        workbook.save(output_file_name)\n    except Exception as e:\n        log_file.write(f'Error in Export_to_Excel: {e}')",
        projectChallenges: [
            "🛠️ **Handling Large Datasets** - Ensuring efficient execution and export of large SQL query results.",
            "📂 **Dynamic File Management** - Generating unique file names and managing multiple output files.",
            "🔐 **Secure SQL Connection** - Managing SQL Server credentials securely and handling connection errors.",
            "📝 **Error Logging** - Capturing and logging errors during query execution and data export."
        ],
        solutionApproach: [
            "✅ **Used Pandas and OpenPyXL** for efficient data handling and Excel/CSV export.",
            "✅ **Implemented JSON Configuration** for easy customization of SQL queries and export settings.",
            "✅ **Added Detailed Logging** to track execution progress and debug errors.",
            "✅ **Dynamic File Naming** to avoid file conflicts and ensure unique outputs."
        ],
        userExperience: {
            "configuration": "Users configure the tool via a JSON file, specifying SQL connection details, queries, and export settings.",
            "execution": "The tool runs from the command line, executing SQL queries and exporting data to the specified format.",
            "output": "Exported files are saved in the designated output folder, with logs stored in a separate log folder for reference."
        },
        futureEnhancements: [
            "📍 **GUI Interface** - Develop a graphical user interface for easier configuration and execution.",
            "📊 **Advanced Data Transformation** - Add support for data transformation and cleaning before export.",
            "🔄 **Integration with Other Databases** - Extend support to other databases like MySQL, PostgreSQL, etc.",
            "📄 **PDF Export** - Add the ability to export data to PDF for reporting purposes."
        ],
        impact: "This tool **streamlines the process of exporting data from SQL Server** to Excel or CSV, saving time and reducing manual effort. It is particularly useful for data analysts, developers, and database administrators who need to generate reports or analyze data regularly.",
        reference: "https://github.com/joji-kuriyathan-joy/Export_SQL_Data",
        image: "/SqlExport.png"
    },
    {
        id: crypto.randomUUID(),
        title: "Stock Management System",
        description: "A Java-based desktop application designed to manage stock inventory, allowing users to add, update, sell, and delete products efficiently. The system provides real-time stock tracking, transaction recording, and low-stock alerts.",
        subheading: "Efficient Stock Management with Java and Swing",
        technologies: [
            "Java",
            "Swing GUI",
            "JUnit",
            "CSV File Handling",
            "MVC Architecture"
        ],
        projectStructure: {
            "frontend": "Swing-based desktop UI for managing stock records and transactions.",
            "backend": "Java-based logic handling CRUD operations and transaction processing.",
            "database": "CSV file-based storage for product inventory and sales transactions.",
            "authentication": "N/A",
            "dataProcessing": "Tracks stock levels, records sales, and updates product details dynamically.",
            "Development": "Implemented using MVC architecture for code modularity and reusability."
        },
        projectScope: "This project was designed to **simplify stock management** by providing a user-friendly interface to track products, handle transactions, and generate real-time stock reports. It allows businesses to streamline inventory processes, prevent stock shortages, and enhance operational efficiency.",
        keyFeatures: [
            "📦 **Stock Management** - Users can add, update, and delete stock items with ease.",
            "🛒 **Sales Transactions** - Tracks product sales, including date, time, and quantity sold.",
            "📊 **Low Stock Alerts** - Notifies users when stock levels fall below a predefined threshold.",
            "🔍 **Smart Search** - Allows users to search for products by code or description.",
            "📝 **Transaction Logging** - Records every sale in CSV files for future reference.",
            "✅ **User-Friendly UI** - Designed with Swing for an intuitive and easy-to-use interface."
        ],
        importantCodeSnippet: "Stock Update Logic",
        codeSnippet: "public boolean updateStock(String productCode, int newQuantity) {\n    if (inventory.containsKey(productCode)) {\n        inventory.get(productCode).setQuantity(newQuantity);\n        return true;\n    }\n    return false;\n}",
        projectChallenges: [
            "⚙️ **CSV File Handling** - Managing structured stock and transaction data efficiently.",
            "🔄 **Dynamic Stock Updates** - Ensuring seamless real-time updates for inventory changes.",
            "📝 **Data Integrity** - Preventing duplicate entries and maintaining accurate transaction logs.",
            "🧪 **Testing and Debugging** - Writing unit tests to validate core functionalities."
        ],
        solutionApproach: [
            "✅ **Implemented MVC Architecture** to separate UI, logic, and data management.",
            "✅ **Used Java Swing** for a dynamic and interactive graphical interface.",
            "✅ **Developed JUnit Test Cases** to ensure system reliability and correctness.",
            "✅ **CSV File Storage** for lightweight and easily accessible data persistence."
        ],
        userExperience: {
            "dashboard": "Displays all stock items, including low-stock warnings.",
            "addProduct": "Users can add new products with descriptions and quantities.",
            "updateStock": "Allows editing of stock levels and product details.",
            "sellProduct": "Enables selling of items with automatic transaction logging.",
            "deleteProduct": "Removes outdated or discontinued products from inventory."
        },
        futureEnhancements: [
            "📍 **Database Integration** - Migrate to SQL-based storage for scalability.",
            "📊 **Graphical Reports** - Add data visualization for better inventory insights.",
            "📄 **Barcode Scanning** - Enable barcode scanning for quick product lookup.",
            "🔄 **Cloud Backup** - Implement cloud-based data storage for enhanced security."
        ],
        impact: "This **Stock Management System** enhances inventory control by providing an efficient, real-time solution for tracking stock, recording transactions, and ensuring seamless business operations.",
        reference: "https://github.com/joji-kuriyathan-joy/StockControlApp---Mini-",
        image: "/stockcontrol.png"
    }

];
