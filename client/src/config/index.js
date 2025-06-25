export const signUpFormControls = [
  {
    name: "userName",
    label: "User Name",
    placeholder: "Enter your user name",
    type: "text",
    componentType: "input",
  },

  {
    name: "userEmail",
    label: "User Email",
    placeholder: "Enter your user email",
    type: "email",
    componentType: "input",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Password must be at least 6 characters",
    type: "password",
    componentType: "input",
  },

  {
    label: "Re-enter Password",
    name: "confirmPassword",
    type: "password",
    placeholder: "Re-enter your password",
    required: true,
  },
];

export const signInFormControls = [
  {
    name: "userEmail",
    label: "User Email",
    placeholder: "Enter your user email",
    type: "email",
    componentType: "input",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter your password",
    type: "password",
    componentType: "input",
  },
];



export const initialSignInFormData = {
  userEmail: "",
  password: "",
};


export const initialSignUpFormData = {
  userName: "",
  userEmail: "",
  password: "",
  confirmPassword: "", 
};

export const languageOptions = [
  { id: "tamil", label: "Tamil" },
  { id: "english", label: "English" },
  { id: "telugu", label: "Telugu" },
  { id: "hindi", label: "Hindi" },
  { id: "german", label: "German" },
  { id: "spanish", label: "Spanish" },
  { id: "french", label: "French" },
  { id: "chinese", label: "Chinese" },
  { id: "japanese", label: "Japanese" },
  { id: "korean", label: "Korean" },
  { id: "portuguese", label: "Portuguese" },
  { id: "arabic", label: "Arabic" },
  { id: "russian", label: "Russian" },
  
];

export const courseLevelOptions = [
  { id: "beginner", label: "Beginner" },
  { id: "intermediate", label: "Intermediate" },
  { id: "advanced", label: "Advanced" },
];

export const courseCategories = [ 
  { id: "web-development", label: "Web Development" },
  { id: "backend-development", label: "Backend Development" },
  { id: "frontend-development", label: "Frontend Development" },
  { id: "fullstack-development", label: "Fullstack Development" },
  { id: "data-science", label: "Data Science" },
  { id: "machine-learning", label: "Machine Learning" },
  { id: "artificial-intelligence", label: "Artificial Intelligence" },
  { id: "cloud-computing", label: "Cloud Computing" },
  { id: "cyber-security", label: "Cyber Security" },
  { id: "mobile-development", label: "Mobile Development" },
  { id: "android-development", label: "Android Development" },
  { id: "ios-development", label: "iOS Development" },
  { id: "game-development", label: "Game Development" },
  { id: "software-engineering", label: "Software Engineering" },
  { id: "devops", label: "DevOps" },
  { id: "blockchain", label: "Blockchain" },
  { id: "augmented-reality", label: "Augmented Reality" },
  { id: "virtual-reality", label: "Virtual Reality" },
  { id: "ui-ux-design", label: "UI/UX Design" },
  { id: "graphic-design", label: "Graphic Design" },
  { id: "digital-marketing", label: "Digital Marketing" },
  { id: "seo", label: "SEO (Search Engine Optimization)" },
  { id: "content-writing", label: "Content Writing" },
  { id: "technical-writing", label: "Technical Writing" },
  { id: "project-management", label: "Project Management" },
  { id: "agile-methodologies", label: "Agile Methodologies" },
  { id: "data-analytics", label: "Data Analytics" },
  { id: "big-data", label: "Big Data" },
  { id: "internet-of-things", label: "Internet of Things (IoT)" },
  { id: "robotics", label: "Robotics" },
  { id: "networking", label: "Networking" },
  { id: "database-management", label: "Database Management" },
  { id: "sql", label: "SQL" },
  { id: "nosql", label: "NoSQL Databases" },
  { id: "programming-basics", label: "Programming Basics" },
  { id: "c-programming", label: "C Programming" },
  { id: "cpp-programming", label: "C++ Programming" },
  { id: "java-programming", label: "Java Programming" },
  { id: "python-programming", label: "Python Programming" },
  { id: "javascript-programming", label: "JavaScript Programming" },
  { id: "typescript", label: "TypeScript" },
  { id: "php-development", label: "PHP Development" },
  { id: "ruby-on-rails", label: "Ruby on Rails" },
  { id: "react-js", label: "React.js" },
  { id: "angular", label: "Angular" },
  { id: "vue-js", label: "Vue.js" },
  { id: "node-js", label: "Node.js" },
  { id: "express-js", label: "Express.js" },
  { id: "firebase", label: "Firebase" },
];


export const courseLandingPageFormControls = [
  {
    name: "title",
    label: "Title",
    componentType: "input",
    type: "text",
    placeholder: "Enter course title",
  },
  {
    name: "category",
    label: "Category",
    componentType: "select",
    type: "text",
    placeholder: "",
    options: courseCategories,
  },
  {
    name: "level",
    label: "Level",
    componentType: "select",
    type: "text",
    placeholder: "",
    options: courseLevelOptions,
  },
  {
    name: "primaryLanguage",
    label: "Primary Language",
    componentType: "select",
    type: "text",
    placeholder: "",
    options: languageOptions,
  },
  {
    name: "subtitle",
    label: "Subtitle",
    componentType: "input",
    type: "text",
    placeholder: "Enter course subtitle",
  },
  {
    name: "description",
    label: "Description",
    componentType: "textarea",
    type: "text",
    placeholder: "Enter course description",
  },
  {
    name:"isFree",
    label: "Is this course free?",
    componentType: "checkbox",
    type: "checkbox",
    default:false,
  },
  {
    name: "pricing",
    label: "Pricing",
    componentType: "input",
    type: "number",
    placeholder: "Enter course pricing",
  },
  {
    name: "objectives",
    label: "Objectives",
    componentType: "textarea",
    type: "text",
    placeholder: "Enter course objectives",
  },
  {
    name: "welcomeMessage",
    label: "Welcome Message",
    componentType: "textarea",
    placeholder: "Welcome message for students",
  },
];

export const courseLandingInitialFormData = {
  title: "",
  category: "",
  level: "",
  primaryLanguage: "",
  subtitle: "",
  description: "",
  pricing: "",
  objectives: "",
  welcomeMessage: "",
  image: "",
};

export const courseCurriculumInitialFormData = [
  {
    title: "",
    videoUrl: "",
    freePreview: false,
    public_id: "",
  },
];

export const sortOptions = [
  { id: "price-lowtohigh", label: "Price: Low to High" },
  { id: "price-hightolow", label: "Price: High to Low" },
  { id: "title-atoz", label: "Title: A to Z" },
  { id: "title-ztoa", label: "Title: Z to A" },
];

export const filterOptions = {
  category: courseCategories,
  level: courseLevelOptions,
  primaryLanguage: languageOptions,
};

export const RAZORPAY_KEY = "rzp_test_aa4kkvlbjJYcvJ"; // Replace with your Razorpay Key ID
