import { selectedCourse } from './store';

export function get(n){
    let tmp;
    switch(n){
        case 'selectedCourse':
            selectedCourse.subscribe(v => {
                tmp = v;
            });
            return tmp;
        default:
            return 'No variable by that name';
    }
}

export function set(n, v){
    let tmp;
    switch(n){
        case 'selectedCourse':
            selectedCourse.set(v);
            break;
        default:
            return 'No variable by that name';
    }
    tmp = get(n);
}