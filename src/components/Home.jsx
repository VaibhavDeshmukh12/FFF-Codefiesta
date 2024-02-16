import './home.css'
import CountdownTimer from './CountdownTimer';
import toast from 'react-hot-toast';

const Home = () => {

    const handleSubmit = async() => {
        // console.log('Form submitted!');
        toast.success("Form submitted successfully");
      };

    return (
        <div>
            <div>
                <div id="container" className="container">
                    {/* timer */}
                    <div id="timer">
                        <CountdownTimer onSubmit={handleSubmit} />
                    </div>
                    <ul id="code">
                        {/* Jumbled HTML Code Here */}
                        <li className="draggable" draggable="true" data-order={1}>
                            &lt;!DOCTYPE html&gt;
                        </li>
                        <li className="draggable" draggable="true" data-order={2}>
                            &lt;html&gt;
                        </li>
                        <li className="draggable" draggable="true" data-order={3}>
                            &lt;head&gt;
                        </li>
                        <li className="draggable" draggable="true" data-order={4}>
                            &lt;title&gt;My Website&lt;/title&gt;
                        </li>
                        <li className="draggable" draggable="true" data-order={5}>
                            &lt;/head&gt;
                        </li>
                        <li className="draggable" draggable="true" data-order={6}>
                            &lt;body&gt;
                        </li>
                        <li className="draggable" draggable="true" data-order={7}>
                            &lt;h1&gt;Welcome&lt;/h1&gt;
                        </li>
                        <li className="draggable" draggable="true" data-order={8}>
                            &lt;p&gt;This is a paragraph.&lt;/p&gt;
                        </li>
                        <li className="draggable" draggable="true" data-order={9}>
                            &lt;/body&gt;
                        </li>
                        <li className="draggable" draggable="true" data-order={10}>
                            &lt;/html&gt;
                        </li>
                    </ul>
                    <div style={{ display: "flex" }}>
                        <button id="resetBtn" className="Btn">
                            Reset
                        </button>
                        <button id="submtBtn" className="Btn">
                            Submit
                        </button>
                        <button id="nextBtn" className="Btn">
                            Next
                        </button>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Home
