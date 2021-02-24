import React, { useState, useEffect } from "react";
import "./likecommentsub.css";
import { Avatar, Button, IconButton } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import moment from "moment";
import {
    increaseSingleVideoView,
    increaseSubscribers,
    getSubscribers,
} from "../../actions/video";
import { isAuth, getCookie } from "../../actions/auth";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import DisqusThread from "./DisqusThread";
import ShareDialog from "./ShareDialog";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ThumbDownAltIcon from "@material-ui/icons/ThumbDownAlt";

const LikeCommentSub = ({
    writer,
    videoId,
    _id,
    desc,
    likes,
    dislikes,
    views,
    title,
    timestamp,
}) => {
    const [flikes, setflikes] = useState(0);
    const [fdislikes, setfdislikes] = useState(0);
    const [subscribers, setSubscribers] = useState(0);

    const history = useHistory();

    useEffect(() => {


    }, [_id, videoId, likes, dislikes, subscribers, writer])

}

