<!DOCTYPE html>
<html lang="ja">

<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <?php wp_deregister_script('jquery'); ?>
    <?php wp_enqueue_script('jquery', 'https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js'); ?>
    <?php wp_head(); ?>

</head>

<body>
    <header id="header">
        <h1 id="logo">
            <a href="<?php echo home_url(); ?>"><img src="<?php bloginfo('template_url'); ?>/assets/images/logo.png" alt="ロゴ" /></a>
        </h1>

        <div id="sp-menu">
            <nav id="nav">
                <ul>
                    <li>
                        <a href="<?php echo home_url('/profile/'); ?>">Profile</a>
                    </li>
                    <li>
                        <a href="<?php echo home_url('/work/'); ?>">Works</a>
                    </li>
                    <li>
                        <a href="<?php echo home_url('/personal/'); ?>">Personal</a>
                    </li>
                    <li>
                        <a href="<?php echo home_url('/contact/'); ?>">Contact</a>
                    </li>
                </ul>
            </nav>
            <a href="https://www.instagram.com/" class="sns" target="_blank">
                <img src="<?php bloginfo('template_url'); ?>/assets/images/insta.png" alt="インスタアイコン">
            </a>
        </div>

        <div class="hamburger">
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div id="mask"></div>
    </header>

    <main>