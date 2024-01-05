import React, { memo } from "react";
// import PropTypes from "prop-types";

import { Routes, Route } from "react-router-dom";

import ProtectedRoute from "../utils/ProtectedRoute";

// Pages
import NotFound from '../components/Common/NotFound';
import Home from "../pages/Home";
import Marketplace from "../pages/Marketplace";
import Activity from "../pages/Activity";
import ItemView from "./Item/ItemView";
import Profile from "../pages/Profile";
import MyCollection from "../pages/Collection/MyCollection";
import CreateCollection from "../pages/Collection/CreateCollection";
import CollectionView from "../pages/Collection/CollectionView";
import CollectionDetail from "../pages/Collection/CollectionDetail";
import EditCollection from "../pages/Collection/CollectionEdit";
import CollectionActivity from "../pages/Collection/CollectionActivity";
import CreateItem from "../pages/Item/CreateItem";
import Settings from "../pages/Profile/Settings";

const Routing = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/marketplace" element={<Marketplace />} />
            <Route path="/activity" element={<Activity />} />
            <Route path="/profile/*" element={<Profile />} />
            <Route path="/collection/mycollection" element={<MyCollection />} />
            <Route path="/collection/add" element={<CreateCollection />} />
            <Route path="/collection/edit/:collection_id" element={<EditCollection />} />
            <Route path="/collection/view/:collection_id" element={<CollectionView />} />
            <Route path="/collection/detail" element={<CollectionDetail />} />
            <Route path="/collection/activity" element={<CollectionActivity />} />
            <Route path="/item/view/:item_id" element={<ItemView />} />
            <Route path="/item/add" element={<CreateItem />} />
            <Route path="/settings" element={<Settings />} />

            <Route path='/*' element={<NotFound />} />
        </Routes>
    );
}

Routing.propTypes = {
    // selectLanding: PropTypes.func.isRequired,
};

export default memo(Routing);
