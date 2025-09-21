function Card({name , education}) {
  return (
    <div className="max-w-xs p-6 rounded-md shadow-md bg-black mt-4">
      <img
        src="https://images.unsplash.com/photo-1706694442016-bd539e1d102b?q=80&w=1077&auto=format&fit=crop&ixlib=rb-4.1.0"
        alt="img"
        className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
      />
      <div className="mt-6 mb-2">
        <span className="block text-sm font-medium font-mono tracking-widest uppercase text-indigo-400">
          Title
        </span>
        <h2 className="text-xl font-semibold tracking-wide">{name}</h2>
      </div>
      <p className="text-gray-300">
        {education.first} {education.second|| "not working"}
      </p>
    </div>
  )
}

export default Card;
