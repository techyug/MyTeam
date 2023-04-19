import React, { useState } from 'react'
import { View } from "react-native"
import Carousel, { Pagination } from 'react-native-snap-carousel'
import { colors } from '../constants/colors'
import { SLIDER_WIDTH, ITEM_WIDTH, CarouselCardItem } from './CarouselCardItem'
import PropTypes from 'prop-types';
const CarouselCards = (props) => {

  const [index, setIndex] = useState(0)
  const isCarousel = React.useRef(null)

  return (
    <View>
      <Carousel
        layout="default"
        layoutCardOffset={1}
        ref={isCarousel}
        data={props.data}
        renderItem={CarouselCardItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        inactiveSlideShift={0}
        useScrollView={false}
        onSnapToItem={(index) => setIndex(index)}
      />
      <Pagination
        dotsLength={props.data.length}
        activeDotIndex={index}
        carouselRef={isCarousel}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          margin:0,
          backgroundColor: colors.PRIMARY
        }}
        containerStyle={{paddingVertical:15}}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
        tappableDots={true}
      />
    </View>
  )
}
CarouselCards.propTypes = {
  data: PropTypes.array.isRequired
};

export default CarouselCards