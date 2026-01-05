import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQData = [
  {
    id: 1,
    question: "Thời gian mở cửa của Tiệm là mấy giờ?",
    answer:
      "Tiệm hoa Có Nàng hoạt động từ 07h00 đến 21h30 tất cả các ngày trong tuần (bao gồm cả Lễ/Tết). Hotline hỗ trợ 24/7: 0902189216.",
  },
  {
    id: 2,
    question: "Tôi cần đặt hoa trước bao lâu để đảm bảo có hoa đẹp nhất?",
    answer:
      "Để Tiệm chuẩn bị chu đáo nhất, bạn nên đặt trước 1-2 tiếng đối với các mẫu bó/giỏ thông thường. Với các lẵng hoa sự kiện lớn hoặc các loại hoa nhập khẩu đặc biệt, vui lòng đặt trước 24 tiếng.",
  },
  {
    id: 3,
    question: "Tiệm có nhận giao hàng tận nơi không? Phí ship tính thế nào?",
    answer:
      "Tiệm nhận giao hoa tận nơi tại Hà Nội. Miễn phí ship bán kính 3km. Các quận xa hơn phí ship sẽ được tính theo giá GrabDelivery tại thời điểm giao để hỗ trợ khách hàng tốt nhất.",
  },
  {
    id: 4,
    question: "Mua hoa tại Tiệm hoa Có Nàng có được tặng kèm thiệp không?",
    answer:
      "Có ạ. Mỗi đơn hàng bó/giỏ hoa đều được tặng kèm một thiệp chúc mừng hoặc banner thiết kế trị giá 20.000đ - 50.000đ.",
  },
  {
    id: 5,
    question: "Nếu người nhận không nghe máy hoặc không có nhà thì xử lý sao?",
    answer:
      "Shipper sẽ gọi tối đa 3 lần. Nếu vẫn không liên lạc được, hoa sẽ được mang về Tiệm bảo quản để đảm bảo độ tươi. Tiệm sẽ hỗ trợ giao lại (có tính phí ship lần 2) khi khách hàng liên hệ lại.",
  },
  {
    id: 6,
    question: "Hoa tươi giữ được bao lâu?",
    answer:
      "Trung bình hoa tươi tại Tiệm có thể giữ được từ 3 - 5 ngày nếu được cấp nước và để nơi thoáng mát. Mỗi đơn hàng Tiệm đều gửi kèm hướng dẫn chăm sóc hoa chi tiết ạ.",
  },
];

function FAQItem({ item }: { item: (typeof FAQData)[0] }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-4 flex items-start justify-between gap-4 text-left hover:bg-gray-50 transition-colors"
      >
        <h3
          className={`text-lg font-semibold flex-1 ${isOpen ? "text-primary" : "text-[#333333]"}`}
        >
          {item.question}
        </h3>
        <div className="flex-shrink-0 mt-0.5">
          {isOpen ? (
            <ChevronUp className="h-5 w-5 text-primary" />
          ) : (
            <ChevronDown className="h-5 w-5 text-gray-400" />
          )}
        </div>
      </button>
      {isOpen && (
        <div className="pb-4 px-0">
          <p className="text-base text-gray-600 leading-relaxed">
            {item.answer}
          </p>
        </div>
      )}
    </div>
  );
}

export default function FAQs() {
  return (
    <div className="bg-white">
      {/* FAQ Content */}
      <section className="py-12 md:py-24">
        <div className="flex justify-center">
          <div style={{ maxWidth: "800px" }} className="w-full px-4 md:px-0">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight uppercase text-center mb-12 text-[#333333]">
              Câu hỏi thường gặp
            </h1>

            <div className="space-y-0">
              {FAQData.map((item) => (
                <FAQItem key={item.id} item={item} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
