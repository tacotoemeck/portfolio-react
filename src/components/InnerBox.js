import React, { useEffect, useState } from "react";
import "./InnerBox.css";

function InnerBox() {
  const [BoxClass, setBoxClass] = useState("InnerBox");

  useEffect(() => {
    setTimeout(() => {
      setBoxClass(BoxClass + " transition");
    }, 50);
  }, []);

  return (
    <div className={BoxClass}>
      <div className="InnerBoxContent">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Pulvinar
          etiam non quam lacus suspendisse. Imperdiet sed euismod nisi porta.
          Faucibus scelerisque eleifend donec pretium vulputate sapien nec
          sagittis aliquam. Id neque aliquam vestibulum morbi blandit cursus
          risus at ultrices. Molestie a iaculis at erat pellentesque adipiscing
          commodo. Tellus elementum sagittis vitae et leo. Consequat ac felis
          donec et odio pellentesque diam. Mauris rhoncus aenean vel elit
          scelerisque mauris. Diam quam nulla porttitor massa id neque aliquam
          vestibulum. Lacus suspendisse faucibus interdum posuere lorem ipsum. A
          erat nam at lectus urna duis. Arcu bibendum at varius vel pharetra vel
          turpis nunc eget. Sodales neque sodales ut etiam sit amet nisl purus.
          Facilisi etiam dignissim diam quis enim. Massa sed elementum tempus
          egestas. Sed blandit libero volutpat sed cras ornare arcu dui vivamus.
          In dictum non consectetur a erat nam. Eros in cursus turpis massa.
          Aliquam faucibus purus in massa. Congue eu consequat ac felis. Quam
          viverra orci sagittis eu volutpat odio facilisis mauris sit. Quam
          nulla porttitor massa id neque aliquam vestibulum morbi. A scelerisque
          purus semper eget duis at tellus. Fermentum iaculis eu non diam
          phasellus. Enim ut tellus elementum sagittis. Eleifend mi in nulla
          posuere sollicitudin aliquam ultrices. Bibendum enim facilisis gravida
          neque convallis a cras. Sollicitudin aliquam ultrices sagittis orci a.
          Vitae sapien pellentesque habitant morbi tristique senectus et.
          Viverra nibh cras pulvinar mattis nunc sed blandit. Cum sociis natoque
          penatibus et magnis dis parturient montes.
        </p>
      </div>
    </div>
  );
}

export default InnerBox;
