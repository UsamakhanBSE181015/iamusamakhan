import Udemy from '../assets/png/Udemy.jpg'
import google from '../assets/png/google.png'
import CUST from '../assets/png/CUST.png'
import hongkong from '../assets/png/hongkong.jpg'
import cisco from '../assets/png/cisco.png'
export const achievementData = {
    bio : "Putting quantified achievements on a resume is great, but I just don’t work with hard numbers. I have data to support the quality of my work.",
    achievements : [
        {
            id : 1,
            title : 'Udemy certification',
            details : 'Figma UI/UX Essential course, which cover user interface designing using the powerful tools within Figma.',
            date : 'Jan 16, 2022',
            field : 'UX & UI',
            image : Udemy
        },
        {
            id : 2,
            title : 'Frontend Web UI Certification',
            details : 'Online course authorize by Hong Kong University offered thorugh Coursera.',
            date : 'Jul 30, 2020',
            field : 'UI',
            image : hongkong
        },
        {
            id : 3,
            title : 'Software Construction & Development Certification',
            details : 'Professional Software Construction & Development certification by Capital University of Science & Technology.',
            date : 'Aug 20, 2019',
            field : 'SCD',
            image : CUST
        },
         {
            id : 4,
            title : 'Google Analytics Certification',
            details : 'An online certification by Google.',
            date : 'Feb 20, 2019',
            field : 'Analytics',
            image : google
        },
         {
            id : 5,
            title : 'Cyber Security',
            details : 'An online certification by Google.',
            date : 'Jun 09, 2021',
            field : 'Security',
            image : cisco
        }


    ]
}


// Do not remove any fields.
// Leave it blank instead as shown below.

/*

export const achievementData = {
    bio : "",
    achievements : []
}

*/