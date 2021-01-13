

function Footer({numOfRemaining, handleClick}) {
  return (
    <footer>
      <p>剩餘項目: {numOfRemaining}</p>
      <button className="btn-reset btn-clear" onClick={() => handleClick('clear')} >清除全部已完成</button>
    </footer>
  );
}

export default Footer;