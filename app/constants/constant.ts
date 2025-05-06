const historyData = [
  '+50 pts credited, praise by Abhay Mathur',
  '+70 pts credited, praise by Ayush Shinghi',
  'Hero bandage awarded by Laxmi N.',
  'TeamPlayer bandage awarded by Laxmi N.',
  'TeamPlayer bandage awarded by Laxmi N.',
  '+50 pts credited, praise by Abhay Mathur',
  '+70 pts credited, praise by Ayush Shinghi',
  'Hero bandage awarded by Laxmi N.',
  'TeamPlayer bandage awarded by Laxmi N.',
  'TeamPlayer bandage awarded by Laxmi N.',
];
const dateData = [
  '6 days ago',
  '20 days ago',
  'a month ago',
  '2 month ago',
  '3 month ago',
  '4 month ago',
  '5 month ago',
  '6 month ago',
  '7 month ago',
  '8 month ago',
];
const userName = 'abhinav';
const post = 'Software Engineer';
const company = 'FiftyFive Tech';
const location = 'Gurugram';
const dob = '12/12/2000';
const mobile = '+91 1234567890';
const email = 'sabhinav9889@gmail.com';
const points = 1250;
const awardSrclis = ["/bestaward.png", "/designaward.jpg", "/images2.jpeg", "/images1.jpeg"];
const awardAlt = ["Best Award", "Design Award", "award image 2", "award image 1"];
const employees = [
  {
    name: 'John Doe',
    title: 'Software Engineer',
    level: 'Senior',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCRAmbpDBUm6geZIg8Rzkqhfe9CqijJY3YPw&s',
  },
  {
    name: 'Jane Smith',
    title: 'Product Manager',
    level: 'Mid-Level',
    imageUrl:
      'https://static.vecteezy.com/system/resources/previews/025/030/083/non_2x/businesswoman-portrait-beautiful-woman-in-business-suit-employee-of-business-institution-in-uniform-lady-office-worker-woman-business-avatar-profile-picture-illustration-vector.jpg',
  },
  {
    name: 'Alice Johnson',
    title: 'UX Designer',
    level: 'Junior',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqHXxOvTrynNTf-Jbbn8ZnNDt7wC_gekyBwQ&s',
  },
  {
    name: 'John Doe',
    title: 'Software Engineer',
    level: 'Senior',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCRAmbpDBUm6geZIg8Rzkqhfe9CqijJY3YPw&s',
  },
  {
    name: 'Jane Smith',
    title: 'Product Manager',
    level: 'Mid-Level',
    imageUrl:
      'https://static.vecteezy.com/system/resources/previews/025/030/083/non_2x/businesswoman-portrait-beautiful-woman-in-business-suit-employee-of-business-institution-in-uniform-lady-office-worker-woman-business-avatar-profile-picture-illustration-vector.jpg',
  },
  {
    name: 'Alice Johnson',
    title: 'UX Designer',
    level: 'Junior',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqHXxOvTrynNTf-Jbbn8ZnNDt7wC_gekyBwQ&s',
  },
  {
    name: 'John Doe',
    title: 'Software Engineer',
    level: 'Senior',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCRAmbpDBUm6geZIg8Rzkqhfe9CqijJY3YPw&s',
  },
  {
    name: 'Jane Smith',
    title: 'Product Manager',
    level: 'Mid-Level',
    imageUrl:
      'https://static.vecteezy.com/system/resources/previews/025/030/083/non_2x/businesswoman-portrait-beautiful-woman-in-business-suit-employee-of-business-institution-in-uniform-lady-office-worker-woman-business-avatar-profile-picture-illustration-vector.jpg',
  },
  {
    name: 'Alice Johnson',
    title: 'UX Designer',
    level: 'Junior',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqHXxOvTrynNTf-Jbbn8ZnNDt7wC_gekyBwQ&s',
  },
  {
    name: 'John Doe',
    title: 'Software Engineer',
    level: 'Senior',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCRAmbpDBUm6geZIg8Rzkqhfe9CqijJY3YPw&s',
  },
  {
    name: 'Jane Smith',
    title: 'Product Manager',
    level: 'Mid-Level',
    imageUrl:
      'https://static.vecteezy.com/system/resources/previews/025/030/083/non_2x/businesswoman-portrait-beautiful-woman-in-business-suit-employee-of-business-institution-in-uniform-lady-office-worker-woman-business-avatar-profile-picture-illustration-vector.jpg',
  },
  {
    name: 'Alice Johnson',
    title: 'UX Designer',
    level: 'Junior',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqHXxOvTrynNTf-Jbbn8ZnNDt7wC_gekyBwQ&s',
  },
];

export type User = {
  contact_no: string
  dob: string
  email: string
  first_name: string
  id: string
  last_name: string
  location: string
  password: string
  points: string
  post: string
}

export { historyData, dateData, userName, post, company, location, dob, mobile, email, employees, awardSrclis, awardAlt, points };
