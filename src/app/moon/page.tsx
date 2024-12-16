import { Metadata } from 'next';
import Moon from './moon';

export const metadata: Metadata = {
    title: {
        absolute: 'Moon'
    }
}

const Space = () => {
    return (
        <div>
            <Moon />
        </div>
    )
};

export default Space;