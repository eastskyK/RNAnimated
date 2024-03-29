import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import AnimatedComponents from './src/ch2/AnimatedComponents';
import AnimatedValue from './src/ch2/AnimatedValue';
import AnimatedTiming from './src/ch2/AnimatedTiming';
import AnimatedSpring from './src/ch2/AnimatedSpring';
import AnimatedDecay from './src/ch2/AnimatedDecay';
import AnimatedComposing from './src/ch2/AnimatedComposing';
import AnimatedOtherMethod from './src/ch2/AnimatedOtherMethod';
import AnimatedProperty from './src/ch2/AnimatedProperty';

import Snackbar from './src/ch3/Snackbar';
import DrawerMenu from './src/ch3/DrawerMenu';
import Collapse from './src/ch3/Collapse';
import Progressbar from './src/ch3/Progressbar';
import Skeleton from './src/ch3/Skeleton';
import SnowAnimation from './src/ch3/SnowAnimation';
import LayoutAnimationIntro from './src/ch4/LayoutAnimationIntro';
import LayoutAnimationPageHeader from './src/ch4/LayoutAnimationPageHeader';

import InteractionManagerIntro from './src/ch4/InteractionManagerIntro';

import PanresponderIntro from './src/ch6/PanresponderIntro';
import PanresponderBall from './src/ch6/PanresponderBall';
import PanresponderModal from './src/ch6/PanresponderModal';
import PanresponderBannerSlider from './src/ch6/PanresponderBannerSlider';
import PanresponderFontSlider from './src/ch6/PanresponderFontSlider';
import ViewLayoutEvent from './src/ch6/ViewLayoutEvent';
import FlatListCheckRenderList from './src/ch8/FlatListCheckRenderList';

function App(): React.JSX.Element {
  return (
    // <SafeAreaView
    //   style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    //   <AnimatedProperty />
    <FlatListCheckRenderList />
    // </SafeAreaView>
  );
}

export default App;
