import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';

export default function Example() {
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    document.title = `You clicked ${count} times`;

    // This return Will correspond to componentWillUnmount
    return () => (document.title = 'React App sin clases');
  }, [count]); // Only re-run the effect if count changes

  return (
    <div>
      <p>You clicked {count} times</p>
      <Button
        variant="contained"
        color="primary"
        onClick={() => setCount(count + 1)}
      >
        Click me
      </Button>
    </div>
  );
}
