import React from 'react';
 
import"../../css/style.css"

function SectionABout(){
return(
    <section className="child-section" id="about-section">
      <img src={require("../../images/img-about.png")} alt="img_2"/>
      <div id="about-text-container">
        <h1>Về chúng tôi</h1>
        <p>
          Sẵn sàng dấn thân vào những cuộc đua có thể 
          là cách sống của tuổi trẻ, nhưng 
          ranh giới giữa dũng cảm và liều mạng lại rất mong manh.
           Không ai ra chiến trường
          với hai bàn tay không, vì vậy hãy tự trang bị chu toàn để
           những nỗ lực 
          của bản thân
          sẽ được đền đáp xứng đáng. Tiếp nối thành 
          công vang dội của 03 mùa trước, <span style={{fontWeight: 'bold'}}>MARKETING ARENA 2020 </span> 
          trở lại cùng thông điệp <span style={{fontWeight: 'bold'}}>
            "Gear Up For The Cup"</span>  hứa hẹn sẽ 
          là một đấu trường đầy thực thụ với 
          đầy rẫy những thách thức, song lại 
          là cơ hội để các Marketer
          tương lai phô diễn những "vũ khí" đáng gờm của bản thân 
          trên hành trình chinh phục 
          chiếc cúp vô địch tràn đầy kiêu hãnh
        </p>
        <p>
          Nếu như<span style={{fontWeight: 'bold'}}> MARKETING ARENA </span>
           các năm trước là sân
           chơi cho những cái đầu nhạy bén 
          và đầy chiến lược, thì mùa thi năm nay lại mang đến thêm một sự thay 
          đổi đột phá: 
          <span style={{fontWeight: 'bold'}}> Cuộc thi Thiết kế "PRINT ART"</span>. 
          Đây chính là cơ hội để những bạn trẻ với bộ óc bay
          bổng cùng kỹ năng điệu nghệ khẳng định dấu ấn của riêng mình trong thế giới sáng 
          tạo đầy màu sắc
        </p>

      </div>
    </section>
);
}



export default SectionABout;