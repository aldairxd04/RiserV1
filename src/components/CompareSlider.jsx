import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

const CompareSlider = () => {
  return (
    <div className="relative mx-auto max-w-3xl py-20">
        <ReactCompareSlider
      itemOne={
        <ReactCompareSliderImage src="https://www.shutterstock.com/image-photo/top-drive-drillerkey-260nw-494964490.jpg" srcSet="https://www.shutterstock.com/image-photo/top-drive-drillerkey-260nw-494964490.jpg" alt="Image one" />
      }
      itemTwo={
        <ReactCompareSliderImage src="/assets/risr8.jpg" srcSet="/assets/risr8.jpg" alt="Image two" />
      }
    />
    </div>
  );
};

export default CompareSlider;
