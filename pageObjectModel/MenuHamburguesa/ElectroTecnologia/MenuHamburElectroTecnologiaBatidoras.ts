import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburElectroTecnologiaBatidoras extends BasePage {

    readonly BATIDORAS: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.BATIDORAS = this.page.locator('//a [@id="menu-item-category-batidoras"]')
    }

    async clickElectroTecnologiaBatidoras(): Promise<void> {
        await this.click(this.BATIDORAS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburElectroTecnologiaBatidoras(): Promise<void> {
        await this.clickElectroTecnologiaBatidoras()
    }
}
