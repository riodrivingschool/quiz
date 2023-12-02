import styles from "./styles.module.css"

// TODO: Create a separated component

const Arrow = () => {
  const render = () => (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      class='prev'
      width='56.898'
      height='91'
      viewBox='0 0 56.898 91'
    >
      <path
        d='M45.5,0,91,56.9,48.452,24.068,0,56.9Z'
        transform='translate(0 91) rotate(-90)'
        fill='#fff'
      />
    </svg>
  )
}

const Slider = () => {}

const Trails = () => {
  const render = () => (
    <>
      <div class='trail'>
        <div class='box1 active'>1</div>
        <div class='box2'>2</div>
        <div class='box3'>3</div>
        <div class='box4'>4</div>
        <div class='box5'>5</div>
      </div>
    </>
  )

  return render()
}

const Home = () => {
  const render = <>Home</>

  return render
}

export default Home
