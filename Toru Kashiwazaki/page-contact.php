<?php get_header(); ?>
    <div id="contact-content" class="main-wrap">
        <div class="box_con">
            <form method="post" action="">
                <table class="formTable">
                    <tr>
                        <th>ご用件</th>
                        <td>
                            <select name="ご用件">
                                    <option value="">選択してください</option>
                                    <option value="ご質問・お問い合わせ">ご質問・お問い合わせ</option>
                                    <option value="撮影依頼">撮影依頼</option>
                                    </select>
                        </td>
                    </tr>
                    <tr>
                        <th>お名前<span>必須</span></th>
                        <td><input size="20" type="text" name="お名前" /></td>
                    </tr>
                    <tr>
                        <th>電話番号（半角）<span>必須</span></th>
                        <td><input size="30" type="text" name="電話番号" /></td>
                    </tr>
                    <tr>
                        <th>Mail（半角）</th>
                        <td><input size="30" type="text" name="Email" /></td>
                    </tr>
                    <tr>
                        <th>お問い合わせ内容<br /></th>
                        <td><textarea name="お問い合わせ内容" cols="50" rows="5"></textarea></td>
                    </tr>
                </table>
                <div class="con_pri">
                    <div class="box_pri">
                        <div class="box_tori">
                            <h4>プライバシー</h4>
                            <p class="txt">プライバシープライバシープライバシープライバシープライバシープライバシープライバシープライバシープライバシープライバシープライバシープライバシープライバシープライバシープライバシー</p>
                        </div>
                        <div class="box_num">
                            <h4>プライバシー</h4>
                            <p class="txt">プライバシープライバシープライバシープライバシープライバシープライバシープライバシープライバシー</p>
                        </div>
                        <div class="box_num">
                            <h4>プライバシー</h4>
                            <p class="txt">プライバシープライバシープライバシープライバシープライバシープライバシープライバシープライバシー</p>
                        </div>
                        <div class="box_num">
                            <h4>プライバシー</h4>
                            <p class="txt">プライバシープライバシープライバシープライバシープライバシープライバシープライバシープライバシー</p>
                        </div>
                    </div>
                </div>
                <div class="box_check">
                    <label>
                            <input type="checkbox" name="acceptance-714" value="1" aria-invalid="false" class="agree"><span class="check">プライバシーポリシーに同意する</span>
                        </label>
                </div>
                <p class="btn">
                    <span><input type="submit" value="　 確認 　" /></span>
                </p>
            </form>
        </div>
    </div>
<?php get_footer(); ?>