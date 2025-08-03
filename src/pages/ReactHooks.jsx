import {
  useCallback,
  useEffect,
  useMemo,
  useReducer,
  useRef,
  useState,
} from "react";
import Card from "../components/UI/Card";
import Button from "../components/UI/Button";
import { Pause, Play, RotateCcw } from "lucide-react";
import { useCounter } from "../hooks/useCounter";
import { useLocalStorage } from "../hooks/useLocalStorage";

const timerReducer = (state, action) => {
  switch (action.type) {
    case "START":
      return { ...state, isRunning: true };
    case "PAUSE":
      return { ...state, isRunning: false };
    case "RESET":
      return { ...state, seconds: 0, isRunning: false };
    case "TICK":
      return { ...state, seconds: state.seconds + 1 };
    default:
      return state;
  }
};

const ReactHooks = () => {
  //useState Hook
  const [message, setMessage] = useState("Hello, React!");

  // useEffect Hook with cleanup
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // useReducer Hook
  const [timerState, dispatch] = useReducer(timerReducer, {
    seconds: 0,
    isRunning: false,
  });

  useEffect(() => {
    console.log("test");
    let interval = null;
    if (timerState.isRunning) {
      interval = setInterval(() => {
        dispatch({ type: "TICK" });
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [timerState.isRunning]);

  //   useRef Hook
  const inputRef = useRef(null);
  const renderCount = useRef(0);
  renderCount.current += 1;

  const focusInput = () => {
    inputRef.current?.focus();
  };

  // useMemo Hook
  const [inputValue, setInputValue] = useState("");
  const expensiveValue = useMemo(() => {
    console.log("Counting expensive value...");
    return inputValue.split("").reverse().join("");
  }, [inputValue]);

  // useCallback Hook
  const handleInputChange = useCallback((e) => {
    setInputValue(e.target.value);
  }, []);

  // Custom Hook
  const { count, increment, decrement, reset, setVal } = useCounter(0);
  const { value, setStoredValue, clearValue } = useLocalStorage(
    "demo-content",
    ""
  );

  return (
    <main className="max-w-6xl mx-auto space-y-8" aria-label="React Hooks Demo">
      <header>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          React Hooks Demo
        </h1>
        <p className="text-gray-600 dark:text-gray-300">
          Explore the power of React Hooks with interactive examples.
        </p>
      </header>

      <section
        className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        aria-label="Hooks Examples"
      >
        {/* useState Demo */}
        <Card aria-label="useState Hook Example">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
            useState Hook
          </h2>
          <div className="space-y-4">
            <div>
              <p className="text-gray-600 dark:text-gray-300 mb-2">
                Current message:
              </p>
              <p
                className="font-mono bg-gray-100 dark:bg-gray-700 p-2 rounded"
                aria-live="polite"
              >
                {message}
              </p>
            </div>
            <div className="flex gap-2">
              <Button
                onClick={() => setMessage("Hello, World!")}
                aria-label="Set message to Hello World"
              >
                Set Hello World
              </Button>
              <Button
                onClick={() => setMessage("React is awesome!")}
                aria-label="Set message to React is awesome"
              >
                Set React Message
              </Button>
            </div>
          </div>
        </Card>
        {/* useEffect Demo */}
        <Card aria-label="useEffect Hook Example">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
            useEffect Hook
          </h2>
          <div className="space-y-4">
            <p className="text-gray-600 dark:text-gray-300">
              Window size (resize to see changes):
            </p>
            <div
              className="font-mono bg-gray-100 dark:bg-gray-700 p-2 rounded"
              aria-live="polite"
            >
              {windowSize.width} x {windowSize.height}
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              This demonstrates useEffect with cleanup
            </p>
          </div>
        </Card>
        {/* useReducer Demo */}
        <Card aria-label="useReducer Hook Example">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
            useReducer Hook
          </h2>
          <div className="space-y-4">
            <div className="text-center">
              <div
                className="text-4xl font-mono font-bold text-blue-600 dark:text-blue-400"
                aria-live="polite"
              >
                {timerState.seconds}s
              </div>
              <p className="text-gray-600 dark:text-gray-300">Timer</p>
            </div>
            <div className="flex gap-2 justify-center">
              <Button
                onClick={() =>
                  dispatch({ type: timerState.isRunning ? "PAUSE" : "START" })
                }
                className="flex gap-2 justify-center"
                aria-label={
                  timerState.isRunning ? "Pause timer" : "Start timer"
                }
              >
                {timerState.isRunning ? (
                  <Pause size={16} aria-hidden="true" />
                ) : (
                  <Play size={16} aria-hidden="true" />
                )}
                {timerState.isRunning ? "Pause" : "Start"}
              </Button>
              <Button
                onClick={() => dispatch({ type: "RESET" })}
                className="flex gap-2 justify-center"
                aria-label="Reset timer"
              >
                <RotateCcw size={16} aria-hidden="true" />
                Reset
              </Button>
            </div>
          </div>
        </Card>
        {/* useRef Demo */}
        <Card>
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
            useRef Hook
          </h2>
          <div className="space-y-4">
            <div>
              <input
                ref={inputRef}
                type="text"
                placeholder="Click button to focus me"
                className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                aria-label="Demo input for useRef"
              />
              <Button
                onClick={focusInput}
                className="mt-2"
                aria-label="Focus input field"
              >
                Focus Input
              </Button>
              <p
                className="text-sm text-gray-500 dark:text-gray-400"
                aria-live="polite"
              >
                Render count: {renderCount.current}
              </p>
            </div>
          </div>
        </Card>
        {/* useMemo Demo */}
        <Card>
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
            useMemo Hook
          </h2>
          <div className="space-y-4">
            <div>
              <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Type something..."
                className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              />
            </div>
            <div>
              <p className="text-gray-600 dark:text-gray-300 mb-2">
                Reversed text (memoized):
              </p>
              <p className="font-mono bg-gray-100 dark:bg-gray-700 p-2 rounded h-12">
                {expensiveValue}
              </p>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Check console for memoization logs
            </p>
          </div>
        </Card>
        {/* Custom Hook */}
        <Card>
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
            Custom Hook
          </h2>
          <div className="space-y-4 mb-4">
            <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">
              useCounter Hook:
            </h3>
            <div className="text-center space-y-4">
              <p className="text-2xl font-bold text-center mb-4 text-blue-600 dark:text-blue-400">
                {count}
              </p>
              <div className="flex justify-center gap-2">
                <Button variant="primary" onClick={increment}>
                  +
                </Button>
                <Button variant="primary" onClick={decrement}>
                  -
                </Button>
                <Button variant="secondary" onClick={reset}>
                  Reset
                </Button>
              </div>
              <div className="flex justify-center gap-2">
                <Button variant="outline" onClick={() => setVal(5)}>
                  Set Value : 5
                </Button>
                <Button variant="outline" onClick={() => setVal(10)}>
                  Set Value : 10
                </Button>
                <Button variant="outline" onClick={() => setVal(15)}>
                  Set Value : 15
                </Button>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">
              useLocalStorage Hook:
            </h3>
            <div className="text-center space-y-4">
              <label htmlFor="textarea" className="sr-only">
                Demo note for useLocalStorage
              </label>
              <textarea
                name="textarea"
                id="textarea"
                className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                rows="3"
                value={value}
                placeholder="This note will be saved to localStorage..."
                onChange={(e) => setStoredValue(e.target.value)}
                aria-label="Demo note for useLocalStorage"
              ></textarea>
              <Button
                variant="danger"
                onClick={clearValue}
                size="sm"
                className="mt-2"
              >
                Clear
              </Button>
            </div>
          </div>
        </Card>
      </section>
      {/* Hook Rules & Best Practices */}
      <Card>
        <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
          Hook Rules & Best Practices
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">
              Rules of Hooks :
            </h3>
            <ul className="space-y-1 text-gray-600 dark:text-gray-300">
              <li>- Only call hooks at the top level</li>
              <li>- Only call hooks from React functions</li>
              <li>- Use the same order every time</li>
              <li>- Don't call hooks inside loops or conditions</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">
              Best Practices :
            </h3>
            <ul className="space-y-1 text-gray-600 dark:text-gray-300">
              <li>- Use custom hooks for reusable logic</li>
              <li>- Include all dependecies in useEffect</li>
              <li>- Use useCallback for expensive function</li>
              <li>- Use useMemo for expensive calculations</li>
            </ul>
          </div>
        </div>
      </Card>
    </main>
  );
};

export default ReactHooks;
