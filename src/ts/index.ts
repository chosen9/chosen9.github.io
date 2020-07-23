/**
 * 
 * @package Bundler
 * 
 * The main project typescript bundler is bundle.ts
 * all the css files will be included here and all the typescript modules
 *
 */

//themes
import '../../modules/ts/themes';

//components...
import ImageModal from '../../modules/ts/components/image-modal';
import '../../modules/ts/components/type';


//layout...
import { Header } from '../../modules/ts/layout/header';
import { Contact } from '../../modules/ts/layout/contact';
import '../../modules/ts/layout/swiper-slider';
import { settings as Settings } from '../../modules/ts/settings';
import Navbar from '../../modules/ts/layout/navbar';
import Introduction from '../../modules/ts/layout/intro';

//styles
import '../sass/style.scss';

let
    application: { classess: object[], init: () => void } = {
        classess: [
            Header,
            ImageModal,
            Contact,
            Settings,
            Navbar,
            Introduction
        ],

        init() {

            this.classess.forEach((cls: any) => {
                new cls();
            })
        }
    };

application.init();