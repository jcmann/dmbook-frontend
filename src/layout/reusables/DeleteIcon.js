const DeleteIcon = (props) => {
  return (
    <>
      <a
        itemID={props.itemID}
        resourceType={props.resourceType}
        className="dmbookIcon"
        href=""
      >
        <i className="fas fa-trash"></i>
      </a>
    </>
  );
};

export default DeleteIcon;
