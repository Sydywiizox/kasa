import Collapse from '@components/Collapse/Collapse';

function About() {
    return (
        <div className='collapse__container'>
            <Collapse title="Test">
                <ul>
                    <li>test1</li>
                    <li>test2</li>
                    <li>test3</li>
                    <li>test4</li>
                    <li>test5</li>
                    <li>test6</li>
                </ul>
            </Collapse>
            <Collapse title="Test">
                <ul>
                    <li>test1</li>
                    <li>test2</li>
                    <li>test3</li>
                    <li>test4</li>
                    <li>test5</li>
                    <li>test6</li>
                </ul>
            </Collapse>
        </div>
    );
}

export default About;
