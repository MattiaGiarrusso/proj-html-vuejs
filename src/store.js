import { reactive } from "vue"

export const store = reactive ({
    
    picBoxs: [
        {
            image: 'cat_5-370x155.jpg',
            title: 'Music',
            course: '5 Courses'
        },
        {
            image: 'cat_4-370x155.jpg',
            title: 'Exercise',
            course: '7 Courses'
        },
        {
            image: 'cat_6-370x155.jpg',
            title: 'Photography',
            course: '4 Courses'
        },
    ]
});