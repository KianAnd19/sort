import React from 'react';

const ComplexityBox = ({ label, complexity }) => (
    <div className="border border-gray-300 hover:bg-slate-300 rounded p-2 text-center bg-white shadow-md">
        <p className="font-bold">{label}</p>
        <p>{complexity}</p>
    </div>
);

const Complexity = ({ best, average, worst, space }) => {
    return (
        <div className="mt-4 p-4 bg-slate-200 rounded-lg grid grid-cols-2 gap-4 md:grid-cols-4">
            <ComplexityBox label="Best" complexity={best} />
            <ComplexityBox label="Average" complexity={average} />
            <ComplexityBox label="Worst" complexity={worst} />
            <ComplexityBox label="Space" complexity={space} />
        </div>
    );
};

export default Complexity;
