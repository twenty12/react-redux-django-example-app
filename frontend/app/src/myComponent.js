export default function MyWrapper(props) {
  console.log(props);
    
  return (
    <div>
      <nav>nav content</nav>
        {props.currentath}
        {props.children}
      <p>other</p>
    </div>
  );
}
