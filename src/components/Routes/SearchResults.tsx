import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import useSearchQuery from "../../hooks/useSearchQuery";
import LayoutRoutes from "../Utilities/LayoutRoutes";

const SearchResults: React.FC = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();

    const [currQueryParam, setCurrQueryParam] = useState<string>("");

    useEffect(() => {
        const query = searchParams.get("q");
        if (!query) {
            navigate("/");
        } else {
            setCurrQueryParam(query);
        }
    }, [navigate, searchParams]);

    const matchedTasks = useSearchQuery(currQueryParam);

    const title = `Results for "${currQueryParam}"`;


    return <LayoutRoutes title={title} tasks={matchedTasks}></LayoutRoutes>;
};

export default SearchResults;
