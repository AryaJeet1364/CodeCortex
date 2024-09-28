import React from 'react'

const goToDemo = (props) => {
  return (
    <>
      <div className="py-12">
        <div className="max-w-screen-xl mx-auto">
          <div className="bg-accent2 transition-transform transform hover:scale-110 rounded-lg flex justify-between items-center">
            <div className="bg-accent1 transform -rotate-2 rounded-lg flex justify-between items-center w-full">
              <div className="flex flex-col lg:flex-row items-center p-12 gap-6 lg:gap-12">
                <div className="flex flex-col gap-6">
                  <span className="text-4xl font-bold">{props.heading1}</span>
                  <p className="text-lg">{props.content1}</p>
                </div>
                <div className="flex justify-end w-full">
                  <button
                    type="button"
                    className="bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition"
                  >
                    {props.action1}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default goToDemo