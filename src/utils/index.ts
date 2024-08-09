export const handleSmoothScroll = (
  to: string,
  e?: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
) => {
  e?.preventDefault()
  const element = document.querySelector(to) as HTMLElement

  window.scrollTo({
    top: element.offsetTop,
    behavior: 'smooth',
  })
}
