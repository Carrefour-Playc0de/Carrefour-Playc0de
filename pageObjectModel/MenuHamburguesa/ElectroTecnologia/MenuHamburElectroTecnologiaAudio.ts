import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburElectroTecnologiaAudio extends BasePage {

    readonly AUDIO: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        // this.AUDIO = this.page.locator('//div[@class=\'vtex-menu-2-x-styledLinkContent vtex-menu-2-x-styledLinkContent--MenuCategorySecondItem-hasSubmenu flex justify-between nowrap\'][normalize-space()=\'Audio\']')
        this.AUDIO = this.page.locator('//a [@id="menu-item-category-audio"]')
    }

    async clickElectroTecnologiaAudio(): Promise<void> {
        await this.click(this.AUDIO)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburElectroTecnologiaAudio(): Promise<void> {
        await this.clickElectroTecnologiaAudio()
    }
}
