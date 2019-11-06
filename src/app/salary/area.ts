export class Area {
  city: string;
  type: {
    I: string;
    II: string;
    III: string;
    IV: string;
  };
}
export class regionType {
  id: number;
  baseWage: number;
}

export const AREAS = [
  {
    city: 'Hà Nội',
    type: {
      I: `- Các quận: Ba Đình, Bắc Từ Liêm, Cầu Giấy, Đống Đa, Hà Đông, Hai Bà Trưng, Hoàn Kiếm, Hoàng Mai, Long Biên, Nam Từ Liêm, Tây Hồ, Thanh Xuân \n- Các huyện: Gia Lâm, Đông Anh, Sóc Sơn, Thanh Trì, Thường Tín, Hoài Đức, Thạch Thất, Quốc Oai, Thanh Oai, Mê Linh, Chương Mỹ \n- Thị xã Sơn Tây`,
      II: `- Các huyện: Ba Vì, Đan Phượng, Phú Xuyên, Phúc Thọ , Ứng Hòa, Mỹ Đức`,
      III: ``,
      IV: ``
    }
  },
  {
    city: 'Hồ Chí Minh',
    type: {
      I: `- Quận 1, Quận 2, Quận 3, Quận 4, Quận 5, Quận 6, Quận 7, Quận 8, Quận 9, Quận 10, Quận 11, Quận 12, Bình Thạnh, Tân Phú, Tân Bình, Bình Tân, Phú Nhuận, Gò Vấp, Thủ Đức\n- Các huyện Củ Chi, Hóc Môn, Bình Chánh, Nhà Bè`,
      II: '- Huyện Cần Giờ',
      III: ``,
      IV: ``
    }
  },
  {
    city: 'Hải Phòng',
    type: {
      I: `- Các quận: Dương Kinh, Hồng Bàng, Hải An, Đồ Sơn, Ngô Quyền, Lê Chân, Kiến An \n- Các huyện: Thủy Nguyên, An Dương, An Lão, Vĩnh Bảo, Tiên Lãng, Cát Hải, Kiến Thụy`,
      II: '- Huyện Bạch Long Vĩ',
      III: ``,
      IV: ``
    }
  },
  {
    city: 'Đồng Nai',
    type: {
      I: `- Thành phố Biên Hòa \n- Thị xã Long Khánh \n- Các huyện Nhơn Trạch, Long Thành, Vĩnh Cửu, Trảng Bom`,
      II: '- Các huyện Định Quán, Xuân Lộc, Thống Nhất',
      III: ` - Các huyện Cẩm Mỹ, Tân Phú`,
      IV: ``
    }
  },
  {
    city: 'Bình Dương',
    type: {
      I: `- Thành phố Thủ Dầu Một \n- Các thị xã Thuận An, Dĩ An, Bến Cát, Tân Uyên \n- Các huyện Bàu Bàng, Bắc Tân Uyên, Dầu Tiếng, Phú Giáo.`,
      II: '',
      III: ``,
      IV: ``
    }
  },
  {
    city: 'Bà Rịa - Vũng Tàu',
    type: {
      I: `- Thành phố Vũng Tàu \n- Thị xã Phú Mỹ`,
      II: '- Thành phố Bà Rịa',
      III: `- Các huyện Long Điền, Đất Đỏ, Xuyên Mộc, Châu Đức, Côn Đảo`,
      IV: ``
    }
  },
  {
    city: 'Hải Dương',
    type: {
      I: ``,
      II: '- Thành phố Hải Dương',
      III: `- Thị xã Chí Linh \n- Các huyện Cẩm Giàng, Nam Sách, Kim Thành, Kinh Môn, Gia Lộc, Bình Giang, Tứ Kỳ`,
      IV: `- Các huyện Thanh Hà, Thanh Miện, Ninh Giang`
    }
  },
  {
    city: 'Hưng Yên',
    type: {
      I: ``,
      II:
        '- Thành phố Hưng Yên \n- Các huyện Mỹ Hào, Văn Lâm, Văn Giang, Yên Mỹ',
      III: `- Các huyện Ân Thi, Khoái Châu, Kim Động, Phù Cừ, Tiên Lữ`,
      IV: ``
    }
  },
  {
    city: 'Vĩnh Phúc',
    type: {
      I: ``,
      II: '- Thành phố Vĩnh Yên, Phúc Yên\n- Huyện Bình Xuyên, Yên Lạc',
      III: `- Các huyện Vĩnh Tường, Tam Đảo, Tam Dương, Lập Thạch, Sông Lô`,
      IV: ``
    }
  },
  {
    city: 'Bắc Ninh',
    type: {
      I: ``,
      II: `- Thành phố Bắc Ninh \n- Thị xã Từ Sơn \n- Các huyện Quế Võ, Tiên Du, Yên Phong, Thuận Thành, Gia Bình, Lương Tài`,
      III: ``,
      IV: ``
    }
  },
  {
    city: 'Quảng Ninh',
    type: {
      I: ``,
      II: `- Thành phố Hạ Long, Cẩm Phả, Uông Bí, Móng Cái`,
      III: `- Các thị xã Quảng Yên, Đông Triều\n- Huyện Hoành Bồ`,
      IV: `- Các huyên Vân Đồn, Đầm Hà, Cô Tô, Tiên Yên, Hải Hà, Bình Liêu, Ba Chẽ`
    }
  },
  {
    city: 'Thái Nguyên',
    type: {
      I: ``,
      II: `- Thành phố Thái Nguyên, Sông Công \n- Thị xã Phổ Yên`,
      III: `- Các huyện Phú Bình, Phú Lương, Đồng Hỷ, Đại Từ`,
      IV: `- Các huyện Định Hóa, Võ Nhai`
    }
  },
  {
    city: 'Phú Thọ',
    type: {
      I: ``,
      II: `- Thành phố Việt Trì`,
      III: `- Thị xã Phú Thọ \n- Các huyện Phù Ninh, Lâm Thao, Thanh Ba, Tam Nông`,
      IV: `- Các huyện Cẩm Khê, Đoan Hùng, Hạ Hòa, Tân Sơn, Thanh Sơn, Thanh Thủy, Yên Lập`
    }
  },
  {
    city: 'Lào Cai',
    type: {
      I: ``,
      II: `- Thành phố Lào Cai`,
      III: `- Các huyện Bảo Thắng, Sa pa`,
      IV: `- Các huyện Bảo Yên, Bát Xát, Bắc Hà, Mường Khương, Si Ma Cai, Văn Bàn`
    }
  },
  {
    city: 'Nam Định',
    type: {
      I: ``,
      II: `- Thành phố Nam Định\n- Huyện Mỹ Lộc`,
      III: `- Các huyện Giao Thủy, Hải Hậu, Nam Trực, Nghĩa Hưng, Trực Ninh, Vụ Bản, Xuân Trường, Ý Yên`,
      IV: ``
    }
  },
  {
    city: 'Ninh Bình',
    type: {
      I: ``,
      II: `- Thành phố Ninh Bình`,
      III: `- Thành phố Tam Điệp\n- Các huyện Gia Viễn, Yên Khánh, Hoa Lư`,
      IV: `- Các huyện Nho Quan, Kim Sơn, Yên Mô`
    }
  },
  {
    city: 'Thừa Thiên Huế',
    type: {
      I: ``,
      II: `- Thành phố Huế`,
      III: `- Các thị xã Hương Thủy, Hương Trà\n- Các huyện Phú Lộc, Phong Điền, Quảng Điền, Phú Vang`,
      IV: `- Các huyện A Lưới, Nam Đông`
    }
  },
  {
    city: 'Quảng Nam',
    type: {
      I: ``,
      II: `- Thành phố Hội An, Tam kỳ`,
      III: `- Thị xã Điện Bàn\n- Các huyện Đại Lộc, Duy Xuyên, Núi Thành, Quế Sơn, Phú Ninh, Thăng Bình`,
      IV: `- Các huyện Bắc Hà My, Nam Trà My, Phước Sơn, Tiên Phước, Hiệp Đức, Nông Sơn, Đông Giang, Nam Giang, Tây Giang.`
    }
  },
  {
    city: 'Đà Nẵng',
    type: {
      I: ``,
      II: `- Các quận: Hải châu, Sơn Trà, Ngũ Hành Sơn, Thanh Khê, Liên Chiểu, Cẩm Lệ \n- Các huyện: Hòa Vang, huyện đảo Hoàng Sa`,
      III: ``,
      IV: ``
    }
  },
  {
    city: 'Khánh Hòa',
    type: {
      I: ``,
      II: `- Thành phố Nha Trang, Cam Ranh`,
      III: `- Thị xã Ninh Hòa \n- Các huyện Cam Lâm, Diên Khánh, Vạn Ninh`,
      IV: `- Các huyện Khánh Vinh, Khánh Sơn, huyện đảo Trường Sa`
    }
  },
  {
    city: 'Lâm Đồng',
    type: {
      I: ``,
      II: `- Thành phố Đà Lạt, Bảo Lộc`,
      III: `- Các huyện Đức Trọng, Di linh`,
      IV: `- Các huyện Lạc Dương, Đơn Dương, Lâm Hà, Bảo Lâm, Đạ Huoai, Đạ Tẻh, Cát Tiên, Đam Rông`
    }
  },
  {
    city: 'Bình Thuận',
    type: {
      I: ``,
      II: `- Thành phố Phan Thiết`,
      III: `- Thị xã La Gi \n- Các huyện Hàm Thuận Bắc, Hàm Thuận Nam`,
      IV: `- Các huyện Đức Linh, Tánh Linh, Tuy Phong, Phú Quý, Hàm Tân, Bắc Bình`
    }
  },
  {
    city: 'Tây Ninh',
    type: {
      I: ``,
      II: `- Thành phố Tây Ninh\n- Các huyện Trảng Bàng, Gò Dầu`,
      III: `- Các huyện Tân Biên, Tân Châu, Dương Minh Châu, Châu Thành, Hòa Thành, Bến Cầu`,
      IV: ``
    }
  },
  {
    city: 'Bình Phước',
    type: {
      I: ``,
      II: `- Thành phố Đồng Xoài \n- Huyện Chơn Thành`,
      III: `- Các thị xã Phước Long, Bình Long \n- Các huyện Đồng Phú, Hớn Quản, Lộc Ninh, Phú Riềng.`,
      IV: `- Các huyện Bù Đăng, Bù Đốp, Bù Gia Mập`
    }
  },
  {
    city: 'Long An',
    type: {
      I: ``,
      II: `- Thành phố Tân An \n- Các huyện Đức Hòa, Bến Lức, Thủ Thừa, Cần Đước, Cần Giuộc`,
      III: `- Thị xã Kiến Tường \n- Các huyện Đức Huệ, Châu Thành, Tân Trụ, Thạnh Hóa`,
      IV: `- Các huyện Vĩnh Hưng, Mộc Hóa, Tân Thạnh, Tân Hưng`
    }
  },
  {
    city: 'Tiền Giang',
    type: {
      I: ``,
      II: `- Thành phố Mỹ Tho \n- Huyện Châu Thành`,
      III: `- Các thị xã Gò Công, Cai Lậy \n- Các huyện Chợ Gạo, Tân Phước`,
      IV: `- Các huyện Cái Bè, Cai Lậy, Gò Công Tây, Gò Công Đông, Tân Phú Đông.`
    }
  },
  {
    city: 'Cần Thơ',
    type: {
      I: ``,
      II: `- Các quận Ninh Kiều, Bình Thủy, Cái Răng, Ô Môn, Thốt Nốt`,
      III: `- Các huyện Phong Điền, Cờ Đỏ, Thớt Lai, Vĩnh Thạnh`,
      IV: ``
    }
  },
  {
    city: 'Kiên Giang',
    type: {
      I: ``,
      II: `- Thành phố Rạch Giá \n- Thành phố Hà Tiên \n- Huyện Phú Quốc`,
      III: `- Các huyện Kiên Lương, Kiên Hải, Châu Thành`,
      IV: `- Các huyện An Biên, An Minh, Giồng Riềng, Gò Quao, Hòn Đất, U Minh Thượng, Tân Hiệp, Vĩnh Thuận, Giang Thành`
    }
  },
  {
    city: 'An Giang',
    type: {
      I: ``,
      II: `- Các thành phố Long Xuyên, Châu Đốc`,
      III: `- Thị xã Tân Châu \n- Các huyện Châu Phú, Châu Thành, Thoại Sơn`,
      IV: `- Các huyện Phú Tân, Tri Tôn, Tịnh Biên, Chợ Mới, An Phú`
    }
  },
  {
    city: 'Trà Vinh',
    type: {
      I: ``,
      II: `- Thành phố Trà Vinh`,
      III: `- Thị xã Duyên Hải`,
      IV: `- Các huyện Châu Thành, Cầu Ngang, Duyên Hải, Trà Cú, Tiểu Cần, Cầu Kè, Càng Long`
    }
  },
  {
    city: 'Cà Mau',
    type: {
      I: ``,
      II: `- Thành phố Cà Mau`,
      III: `- Các huyện Năm Căn, Cái Nước, U Minh, Trần Văn Thời`,
      IV: `- Các huyện Đầm Dơi, Ngọc Hiển, Thới Bình, Phú Tân`
    }
  },
  {
    city: 'Bắc Giang',
    type: {
      I: ``,
      II: ``,
      III: `- Thành phố Bắc Giang\n- Các huyện Việt Yên, Yên Dũng, Hiệp Hòa, Tân Yên, Lạng Giang`,
      IV: `- Các huyện Yên Thế, Lục Ngạn, Sơn Động, Lục Nam`
    }
  },
  {
    city: 'Hà Nam',
    type: {
      I: ``,
      II: ``,
      III: `- Thành phố Phủ Lý \n- Huyện Duy Tiên, Kim Bảng`,
      IV: `- Các huyện Lý Nhân, Bình Lục, Thanh Liêm`
    }
  },
  {
    city: 'Hòa Bình',
    type: {
      I: ``,
      II: ``,
      III: `- Thành phố Hòa Bình\n- Huyện Lương Sơn`,
      IV: `- Các huyện Cao Phong, Kỳ Sơn, Kim Bôi, Lạc Sơn, Lạc Thủy, Mai Châu, Tân Lạc, Yên Thủy, Đà Bắc`
    }
  },
  {
    city: 'Thanh Hóa',
    type: {
      I: ``,
      II: ``,
      III: `- Thành phố Thanh Hóa, Sầm Sơn \n- Thị xã Bỉm Sơn và huyện Tĩnh Gia`,
      IV: `- Các huyện Bá Thước, Cẩm Thủy, Đông Sơn, Hà Trung, Hậu Lộc, Hoằng Hóa, Lang Chánh, Mường Lát, Nga Sơn, Ngọc Lặc, Như Thanh, Như Xuân, Nông Cống, Quan Hóa, Quan Sơn, Quảng Xương, Thạch Thành, Thiệu Hóa, Thọ Xuân, Thường Xuân, Triệu Sơn, Vĩnh Lộc, Yên Định`
    }
  },
  {
    city: 'Hà Tĩnh',
    type: {
      I: ``,
      II: ``,
      III: `- Thành phố Hà Tĩnh \n- Thị xã Kỳ Anh`,
      IV: `- Thị xã Hồng Lĩnh \n- Các huyện Cẩm Xuyên, Can Lộc, Đức Thọ, Hương Khê, Hương Sơn, Kỳ Anh, Nghi Xuân, Thạch Hà, Vũ Quang, Lộc Hà`
    }
  },
  {
    city: 'Phú Yên',
    type: {
      I: ``,
      II: ``,
      III: `- Thành phố Tuy Hòa \n- Thị xã Sông Cầu và huyện Đông Hòa`,
      IV: `- Các huyện Phú Hòa, Tuy An, Sông Hinh, Đồng Xuân, Tây Hòa, Sơn Hòa`
    }
  },
  {
    city: 'Ninh Thuận',
    type: {
      I: ``,
      II: ``,
      III: `- Thành phố Phan Rang - Tháp Chàm \n- Huyện Ninh Hải, Thuận Bắc`,
      IV: `- Các huyện Bác Ái, Ninh Phước, Ninh Sơn, Thuận Nam`
    }
  },
  {
    city: 'Kon Tum',
    type: {
      I: ``,
      II: ``,
      III: `- Thành Phố Kom Tum \n- Huyện Đăk Hà`,
      IV: `- Các huyện Đăk Tô, Đăk Glei, Ia H'Drai, Kon Plông, Kon Rẫy, Ngọc Hồi, Sa Thầy, Tu Mơ Rông`
    }
  },
  {
    city: 'Bến Tre',
    type: {
      I: ``,
      II: ``,
      III: `- Thành phố Bến Tre \n- Huyện Châu Thành`,
      IV: `- Các huyện Ba Tri, Bình Đại, Chợ Lách, Giồng Trôm, Mỏ Cày Bắc, Mỏ Cày Nam, Thạnh Phú`
    }
  },
  {
    city: 'Vĩnh Long',
    type: {
      I: ``,
      II: ``,
      III: `- Thành phố Vĩnh Long \n- Thị xã Bình Minh \n- Huyện Long Hồ`,
      IV: `- Các huyện Bình Tân, Mang Thít, Tam Bình, Trà Ôn, Vũng Liêm`
    }
  },
  {
    city: 'Hậu Giang',
    type: {
      I: ``,
      II: ``,
      III: `- Thành phố Vị Thanh \n- Thị xã Ngã Bảy \n- Các huyện Châu Thành, Châu Thành A`,
      IV: `- Thị xã Long Mỹ \n- Các huyện Vị Thủy, Long Mỹ, Phụng Hiệp`
    }
  },
  {
    city: 'Bạc Liêu',
    type: {
      I: ``,
      II: ``,
      III: `- Thành Phố Bạc Liêu \n- Thị xã Giá Rai`,
      IV: `- Các huyện Hồng Dân, Hòa Bình, Phước Long, Vĩnh Lợi, Đông Hải`
    }
  },
  {
    city: 'Sóc Trăng',
    type: {
      I: ``,
      II: ``,
      III: `- Thành phố Sóc Trăng \n- Các thị xã Vĩnh Châu, Ngã Năm`,
      IV: `- Các huyện Mỹ Tú, Long Phú, Thạnh Trị , Mỹ Xuyên , Châu Thành, Trần Đề, Kế Sách, Cù lao Dung`
    }
  },
  {
    city: 'Bắc Kạn',
    type: {
      I: ``,
      II: ``,
      III: `- Thành phố Bắc Kạn`,
      IV: `- Các huyện Pác Nặm, Ba Bể, Ngân Sơn, Bạch Thông, Chợ Đồn, Chợ Mới, Na Rì`
    }
  },
  {
    city: 'Cao Bằng',
    type: {
      I: ``,
      II: ``,
      III: `- Thành phố Cao Bằng`,
      IV: `- Các huyện Trùng Khánh, Hà Quảng, Bảo Lạc, Bảo Lâm, Hạ Lang, Hòa An, Nguyên Bình, Phục Hòa, Thạch An, Trà Lĩnh, Thông Nông, Quảng Uyên`
    }
  },
  {
    city: 'Đắk Lắk',
    type: {
      I: ``,
      II: ``,
      III: `- Thành phố Buôn Mê Thuột`,
      IV: `- Thị xã Buôn Hồ \n- Các huyện Buôn Đôn, Cư Kuin, Cư M'Gar, Ea Kar, Ea Súp, Krông Ana, Ea H'leo, Krông Bông, Krông Búk, Krông Năng, Krông Pắc, Lắk, M'Drắk`
    }
  },
  {
    city: 'Đắk Nông',
    type: {
      I: ``,
      II: ``,
      III: ``,
      IV: `- Thị xã Gia Nghĩa \n- Các huyện Cư Jút, Đắk Glong, Đắk Mil, Đắk R'lấp, Đắk Song, Krông Nô, Tuy Đức`
    }
  },
  {
    city: 'Điện Biên',
    type: {
      I: ``,
      II: ``,
      III: `- Thành phố Điện Biên Phủ`,
      IV: `- Thị xã Mường Lay \n- Các huyện Điện Biên, Điện Biên Đông, Mường Ảng, Mường Chà, Mường Nhé, Tủa Chùa, Tuần Giáo, Nậm Pồ`
    }
  },
  {
    city: 'Đồng Tháp',
    type: {
      I: ``,
      II: ``,
      III: `- Thành phố Cao Lãnh \n- Thành phố Sa Đéc`,
      IV: `- Thị xã Hồng Ngự \n- Các huyện Cao Lãnh, Châu Thành, Hồng Ngự, Lai Vung, Lấp Vò, Tam Nông, Tân Hồng, Thanh Bình, Tháp Mười.`
    }
  },
  {
    city: 'Gia Lai',
    type: {
      I: ``,
      II: ``,
      III: `- Thành phố Pleiku`,
      IV: `- Thị xã An Khê, thị xã Ayun Pa \n- Các huyện Chư Păh, Chư Prông, Chư Sê, Đắk Đoa, Chư Pưh, Phú Thiện, Mang Yang, Krông Pa, Kông Chro, K'Bang, Ia Pa, Ia Grai, Đức Cơ, Đak Pơ`
    }
  },
  {
    city: 'Hà Giang',
    type: {
      I: ``,
      II: ``,
      III: `- Thành phố Hà Giang`,
      IV: `- Các huyện Bắc Mê, Bắc Quang, Đồng Văn, Hoàng Su Phì, Mèo Vạc, Quản Bạ, Quang Bình, Vị Xuyên, Xín Mần, Yên Minh`
    }
  },
  {
    city: 'Lai Châu',
    type: {
      I: ``,
      II: ``,
      III: `- Thành phố Lai Châu`,
      IV: `- Các huyện Mường Tè, Phong Thổ, Sìn Hồ, Tam Đường, Than Uyên, Tân Uyên, Nậm Nhùn`
    }
  },
  {
    city: 'Lạng Sơn',
    type: {
      I: ``,
      II: ``,
      III: `- Thành phố Lạng Sơn`,
      IV: `- Các huyện Bắc Sơn, Bình Gia, Cao Lộc, Chi Lăng, Đình Lập, Hữu Lũng, Lộc Bình, Tràng Định, Văn Lãng, Văn Quan`
    }
  },
  {
    city: 'Quảng Bình',
    type: {
      I: ``,
      II: `- Thành phố Đồng Hới`,
      III: `- Thị xã Ba Đồn \n- Các huyện Lệ Thủy, Quảng Ninh, Bố Trạch, Quảng Trạch.`,
      IV: `- Các huyện Minh Hóa, Tuyên Hóa`
    }
  },
  {
    city: 'Nghệ An',
    type: {
      I: ``,
      II: ``,
      III: `- Thành phố Vinh`,
      IV: `- Thị xã Cửa Lò, Thị xã Hoàng Mai, Thị xã Thái Hòa \n- Các huyện Anh Sơn, Con Cuông, Diễn Châu, Đô Lương, Hưng Nguyên, Quỳ Châu, Kỳ Sơn, Nam Đàn, Nghi Lộc, Nghĩa Đàn, Quế Phong, Quỳ Hợp, Quỳnh Lưu, Tân Kỳ, Thanh Chương, Tương Dương, Yên Thành`
    }
  },
  {
    city: 'Quảng Trị',
    type: {
      I: ``,
      II: ``,
      III: `- Thành phố Đông Hà`,
      IV: `- Thị xã Quảng Trị \n- Các huyện Cam Lộ, Cồn Cỏ, Đak Rông, Gio Linh, Hải Lăng, Hướng Hóa, Triệu Phong, Vĩnh Linh`
    }
  },
  {
    city: 'Sơn La',
    type: {
      I: ``,
      II: ``,
      III: `- Thành phố Sơn La`,
      IV: `- Các huyện: Quỳnh Nhai, Mường La, Thuận Châu, Phù Yên, Bắc Yên, Mai Sơn, Sông Mã, Yên Châu, Mộc Châu, Sốp Cộp, Vân Hồ`
    }
  },
  {
    city: 'Thái Bình',
    type: {
      I: ``,
      II: ``,
      III: `- Thành phố Thái Bình`,
      IV: `- Các huyện Đông Hưng, Hưng Hà, Kiến Xương, Quỳnh Phụ, Thái Thụy, Tiền Hải, Vũ Thư`
    }
  },
  {
    city: 'Tuyên Quang',
    type: {
      I: ``,
      II: ``,
      III: `- Thành phố Tuyên Quang`,
      IV: `- Các huyện Chiêm Hóa, Hàm Yên, Lâm Bình, Na Hang, Sơn Dương, Yên Sơn`
    }
  },
  {
    city: 'Yên Bái',
    type: {
      I: ``,
      II: ``,
      III: `- Thành phố Yên Bái`,
      IV: `- Thị xã Nghĩa Lộ \n- Các huyện Lục Yên, Mù Cang Chải, Trạm Tấu, Trấn Yên, Văn Chấn, Văn Yên, Yên Bình`
    }
  },
  {
    city: 'Bình Định',
    type: {
      I: ``,
      II: ``,
      III: `- Thành phố Quy Nhơn`,
      IV: `- Thị xã An Nhơn \n- Các huyện Hoài Nhơn, An Lão, Phù Cát, Phù Mỹ, Tuy Phước, Tây Sơn, Vân Canh, Vĩnh Thạnh, Hoài Ân`
    }
  },
  {
    city: 'Quãng Ngãi',
    type: {
      I: ``,
      II: ``,
      III: `- Thành phố Quảng Ngãi \n- Các huyện Bình Sơn, Sơn Tịnh`,
      IV: `- Các huyện Ba Tơ, Đức Phổ, Minh Long, Mộ Đức, Lý Sơn, Tư Nghĩa, Trà Bồng, Tây Trà, Sơn Tây, Sơn Hà, Nghĩa Hành`
    }
  }
];
