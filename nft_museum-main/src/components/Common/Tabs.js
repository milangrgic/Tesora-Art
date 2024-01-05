import * as React from 'react';

import Collections from './Collections';
import TransactionInfo from './TransactionInfo';
import OffersInfo from '../Profile/OffersInfo';
import Test_Image from '../../assets/Home/test.jpg';
import Trend_Image from '../../assets/Home/trend.png';
import Unique_Image from '../../assets/Home/unique.png';
import Dfgadfrds_Image from '../../assets/Home/dfgadfrds.jpg';
import Metaverso_Image from '../../assets/Home/metaverso.jpg';
import Sculpture_Image from '../../assets/Home/sculpture.jpg';
import Certificates_Image from '../../assets/Home/certificates.jpg';
import Painters_Image from '../../assets/Home/painters.png';
import Photography_Image from '../../assets/Home/photography.png';
import Modern_Image from '../../assets/Home/modern.png';
import Simple_Image from '../../assets/Activity/simple.png';

import { ProfileContext } from '../../utils/context';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    root : {
        "& .MuiTab-root" : {
            fontSize : '16px',
            textTransform : 'unset',
            overflow : 'auto !important'
        },
        "& .MuiTabs-scroller" : {
            overflow : 'scroll !important',

            "&::-webkit-scrollbar": {
                display : 'none'
            },
        },
    },
    tabContent : {
        padding : '0px'
    }
}))

const collection = [
    {
        image : Test_Image,
        name : 'Test Image',
        ethPrice : 0.0001,
        usdPrice : ''
    },
    {
        image : Trend_Image,
        name : 'Trend',
        ethPrice : 6,
        usdPrice : ''
    },
    {
        image : Unique_Image,
        name : 'Unique',
        ethPrice : 5,
        usdPrice : ''
    },
    {
        image : Dfgadfrds_Image,
        name : 'Dfgadfrds',
        ethPrice : 0.0001,
        usdPrice : ''
    },
]


const favoriteHead = [
    // {
    //     name : 'Collection',
    //     width : '80px',
    // },
    {
        name : 'Item',
        width : '80px',
    },
    {
        name : 'Event',
        width : '80px',
    },
    {
        name : 'Price',
        width : '50px',
    },
    {
        name : 'From',
        width : '80px',
    },
    {
        name : 'To',
        width : '80px',
    },
    {
        name : 'Transaction Hash',
        width : '100px',
    },
    {
        name : 'Created Date',
        width : '140px',
    },
]

const favoriteData = [
    {
        item : Sculpture_Image,
        event : 'Minted',
        price : '0.0001 ETH',
        from : '',
        to : 'James Abbas',
        transactionHash : '0x76c642ed278930849ab990c42068067c5a17750f7f1536e54e31a62fff26239',
        createdDate : 'January 10, 2022'
    },
    {
        item : Dfgadfrds_Image,
        event : 'Minted',
        price : '0.001 ETH',
        from : '',
        to : 'James Abbas',
        transactionHash : '0xf6b2b6e92058b462aff0c748c246e2c3549d417f2af758445e267a6a051b994',
        createdDate : 'December 13, 2021'
    },
    {
        item : Simple_Image,
        event : 'Bids',
        price : '0.001 ETH',
        from : 'James Abbas',
        to : 'Jammy h',
        transactionHash : '',
        createdDate : 'December 6, 2021'
    },
    {
        item : Photography_Image,
        event : 'Bids',
        price : '0.5 ETH',
        from : 'James Abbas',
        to : 'Jammy h',
        transactionHash : '',
        createdDate : 'December 1, 2021'
    },
    {
        item : Unique_Image,
        event : 'Bids',
        price : '0.5 ETH',
        from : 'James Abbas',
        to : 'Jammy h',
        transactionHash : '',
        createdDate : 'November 30, 2021'
    },
    {
        item : Unique_Image,
        event : 'Bids',
        price : '0.1 ETH',
        from : 'James Abbas',
        to : 'Jammy h',
        transactionHash : '',
        createdDate : 'November 30, 2021'
    },
    {
        item : Trend_Image,
        event : 'Minted',
        price : '6 ETH',
        from : '',
        to : 'Jammy h',
        transactionHash : '0xb37735b7f9fd06f551cfbf266c4cbd678d2d9e4db895a70d167afe3c9b8722da',
        createdDate : 'November 26, 2021'
    },
    {
        item : Unique_Image,
        event : 'Minted',
        price : '5 ETH',
        from : '',
        to : 'Jammy h',
        transactionHash : '0x01f16773898e1858e0f7f1bb7544d45e9aced48663ab665dff8aeaf4dbe21b79',
        createdDate : 'November 26, 2021'
    },
    {
        item : Simple_Image,
        event : 'Bids',
        price : '1 ETH',
        from : 'dweio dicu',
        to : 'Jammy h',
        transactionHash : '',
        createdDate : 'November 24, 2021'
    },
    {
        item : Simple_Image,
        event : 'Bids',
        price : '0.0001 ETH',
        from : 'Tina a',
        to : 'Jammy h',
        transactionHash : '',
        createdDate : 'November 20, 2021'
    },
]

const offerHead = [
    // {
    //     name : 'Collection',
    //     width : '80px',
    // },
    {
        name : 'Item',
        width : '80px',
    },
    {
        name : 'Sender',
        width : '80px',
    },
    {
        name : 'Price',
        width : '50px',
    },
    {
        name : 'Created Date',
        width : '140px',
    },
    {
        name : 'Action',
        width : '140px',
    },
]

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    {children}
                </Box>
            )}
        </div>
    );
}

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const BasicTabs = (props) => {

    const {
        type
    } = props;
    
    const classes = useStyles();

    const [value, setValue] = React.useState(0);
    const { items, offers, favourates, users } = React.useContext(ProfileContext);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    React.useEffect(() => {
        if(type === 'favorited')
            setValue(2)
        else
            setValue(0)
    }, [type])

    return (
        <Box className={classes.root}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                <Tab label="Collected" {...a11yProps(0)} />
                <Tab label="Created" {...a11yProps(1)} />
                <Tab label="Favorited" {...a11yProps(2)} />
                <Tab label="Activity" {...a11yProps(3)} />
                <Tab label="Offers" {...a11yProps(4)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <Collections collection={items} />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Collections collection={items} />
            </TabPanel>
            <TabPanel value={value} index={2} className={classes.tabContent}>
                <Collections collection={items} />
            </TabPanel>
            <TabPanel value={value} index={3}>
                <TransactionInfo
                    transactionHead={favoriteHead}
                    transactionData={favoriteData}
                />
            </TabPanel>
            <TabPanel value={value} index={4}>
                <OffersInfo
                    offerHead={offerHead}
                    offerData={offers}
                />
            </TabPanel>
        </Box>
    );
}

export default BasicTabs;