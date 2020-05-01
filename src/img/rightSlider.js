import React from "react";

function RightSliderArrow(props) {
  let colors = {
    mainColor: props.mainColor || "#53C1DE",
    backgroundColor: props.background || "#FFF",
  };

  return (
    <svg x="0px" y="0px" viewBox="0 0 512 512">
      <g>
        <g>
          <g>
            <path
              d="M256,0C114.833,0,0,114.833,0,256s114.833,256,256,256s256-114.833,256-256S397.167,0,256,0z M256,490.667
				C126.604,490.667,21.333,385.396,21.333,256S126.604,21.333,256,21.333S490.667,126.604,490.667,256S385.396,490.667,256,490.667
				z"
            />
            <path
              d="M220.875,131.125c-4.167-4.167-10.917-4.167-15.083,0c-4.167,4.167-4.167,10.917,0,15.083L315.583,256L205.792,365.792
				c-4.167,4.167-4.167,10.917,0,15.083c2.083,2.083,4.813,3.125,7.542,3.125c2.729,0,5.458-1.042,7.542-3.125l117.333-117.333
				c4.167-4.167,4.167-10.917,0-15.083L220.875,131.125z"
            />
          </g>
        </g>
      </g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
    </svg>
  );
}

export default RightSliderArrow;
