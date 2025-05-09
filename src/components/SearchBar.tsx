import { useState } from "react";

interface SearchBarProps {
    onSearch: (query: string) => void;
}
export default function SearchBar({ onSearch }: SearchBarProps) {
    const [input, setInput] = useState('')

    function handleSubmit() {
        onSearch(input)
    }

    return (
        <div>
            <input type="text"
                placeholder="Enter something to search"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />

            <button onClick={handleSubmit}>Search</button>

        </div>
    )
}