import React, { useState, useEffect, useRef } from "react";
import { createSearchParams, Link, useNavigate } from "react-router-dom";
import { Task } from "../../interface.tsx";
import useDate from "../../hooks/useDate";
import useSearchQuery from "../../hooks/useSearchQuery";
import useVisibility from "../../hooks/useVisibility";
import "./SearchField.css"
const ItemSearch: React.FC<{ task: Task }> = ({ task }) => {
    const dateFormated = useDate(task.date);
    return (
        <li key={task.id} className="py-2">
            <Link
                to={`/task/${task.id}`}
                className="itemSearch"
            >
                <span>{task.title}</span>
                <span>{dateFormated}</span>
            </Link>
        </li>
    );
};

const SearchField: React.FC = () => {
    const navigate = useNavigate();

    const searchResultsRef = useRef<HTMLInputElement>(null);
    const [searchInputValue, setSearchInputValue] = useState<string>("");

    const matchedTasks = useSearchQuery(searchInputValue);

    const tasks = matchedTasks.slice(0, 4);

    const {
        elementIsVisible: listResultsVisible,
        showElement: showListResults,
        closeElement: closeListResults,
    } = useVisibility([searchResultsRef.current!], () => setSearchInputValue(""));

    const navigateToSearchResults = () => {
        navigate({
            pathname: "results",
            search: createSearchParams({
                q: searchInputValue,
            }).toString(),
        });
    };

    useEffect(() => {
        if (searchInputValue.trim().length > 0) {
            showListResults();
        } else {
            closeListResults();
        }
    }, [closeListResults, searchInputValue, showListResults]);

    return (
        <div className="search">
            <form className="formSeach" autoComplete="off">
                <label htmlFor="search" className="sr-only"></label>
                <input
                    type="search"
                    id="search"
                    placeholder="Search task"
                    ref={searchResultsRef}
                    onKeyUp={({ currentTarget }) => {
                        setSearchInputValue(currentTarget.value);
                    }}
                    className="inputStyles"
                />
                {listResultsVisible && (
                    <div className="listResultsVisible">
                        {tasks.length ? (
                            <>
                                <ul>
                                    {tasks.map((task) => (
                                        <ItemSearch key={task.id} task={task} />
                                    ))}
                                </ul>
                                <button
                                    onClick={navigateToSearchResults}
                                    className="btnTask"
                                >
                                    All results for "{searchInputValue}"
                                </button>
                            </>
                        ) : (
                            <span>No tasks found</span>
                        )}
                    </div>
                )}
            </form>
        </div>
    );
};

export default SearchField;
