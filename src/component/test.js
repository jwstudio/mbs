const CustomModal = ({ open, children, ...rest  }) => {
    const className = open ? "modal-container" : "hidden";
  
    return (
      <div className={className}>
          {children}
      </div>
    );
  };