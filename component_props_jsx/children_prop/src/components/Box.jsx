const Box = ({ title, children,name="aman pandey" }) => {
  return (
    <div style={{ border: "2px solid #333", padding: "16px", marginBottom: "20px" }}>
      <h2>{title}</h2>    {/* Title prop */}
      <div>{children}</div>  {/* children content */}
      <p>{name}</p>
    </div>
  );
};

export default Box;
